import express from 'express';
import mongoose, { mongo } from 'mongoose';
import { config } from 'dotenv'
import { Todo } from './models/Todo.js'

const app = express()
const port = 3012

config();

app.use(express.json())
// try{
//     const connection = await mongoose.connect("mongodb://localhost:27017/todolist");
//     console.log("Database Connected!!!");
// } catch(err){
//     console.log(err.messsage);
// }


// app.listen(port,()=>{
//     console.log(`Server is Running on http://localhost:${port}`);
// })

try {
    await mongoose.connect(process.env.URI);
    console.log('Connected to MongoDB');
    
    app.listen(port, () => {
      console.log(`Server Running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
}

app.get("/",(req,res)=>{
    res.send("TodoList");
})

app.post("/addTask",async(req,res)=>{
    const todo = new Todo({title:"Mongoose", desc:"Mongoose Package is Good", isDone:false})
    await todo.save()
})

app.put("/updateTask/:id",async(req,res)=>{
    const id = req.params.id;
    const updatedData = req.body; 
    await Todo.findByIdAndUpdate(id, updatedData);
})

app.delete("/delete/:id", async(req,res)=>{
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
})
