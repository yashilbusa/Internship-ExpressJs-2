import express from 'express';
import mongoose, { mongo } from 'mongoose';
import { config } from 'dotenv'
import { Todo } from './models/Todo.js'
import { StudentData } from './models/Student.js';

const app = express()
const port = 3012

config();

app.use(express.json())
try{
    // const connection = await mongoose.connect("mongodb://localhost:27017/todolist");
    const connection = await mongoose.connect("mongodb://localhost:27017/Student");
    console.log("Database Connected!!!");
} catch(err){
    console.log(err.messsage);
}

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
})

// try {
//     await mongoose.connect(process.env.URI);
//     console.log('Connected to MongoDB');
    
//     app.listen(port, () => {
//       console.log(`Server Running on http://localhost:${port}`);
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error.message);
// }

const url = "https://jsonplaceholder.typicode.com/todos"

// app.get("/",(req,res)=>{
//     res.send("TodoList");
// })

app.get("/:id", async (req, res) => {
    try {
        const dataid = req.params.id;
        const todoData = await Todo.findOne({ id: dataid });
        if (!todoData) {
            return res.status(404).send({ message: "Todo not found" });
        }
        res.send(todoData);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.post("/addTask",async(req,res)=>{
    const response = await fetch(url)
    const todosData = await response.json(); 

    for(let i=0;i<10;i++){
        const newTodo = new Todo({
            userId: todosData[i].userId,
            id: todosData[i].id,
            title: todosData[i].title,
            completed: todosData[i].completed
        });
        await newTodo.save()
    }
})

app.put("/update/:id", async(req,res)=>{
    const Uid = req.params.id;
    const updatedData = req.body;
    await Todo.updateOne({id:Uid},{$set:updatedData});
})

app.delete("/delete/:id", async(req,res)=>{
    const Did = req.params.id;
    await Todo.deleteOne({ id: Did });
})

app.get("/", async (req,res) => {
    try {
        const data = await Todo.find();
        res.send(data);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});