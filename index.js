import express from 'express';
import mongoose from 'mongoose';
import { Todo } from './models/Todo.js'

const app = express()
const port = 3012

try{
    const connection = await mongoose.connect("mongodb://localhost:27017/todolist");
    console.log("Database Connected");
} catch(err){
    console.log(err.messsage);
}

app.get("/", async(req,res)=>{
    const todo = new Todo({title:"Mongoose", desc:"Mongoose Package is Good", isDone:false})
    await todo.save()
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
})

