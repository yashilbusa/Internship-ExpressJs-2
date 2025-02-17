import express from 'express';
import mongoose from 'mongoose';
import { Todo } from './models/Todo.js'

const app = express()
const port = 3012

const connection = await mongoose.connect("mongodb://localhost:27017/todolist");

app.get("/",(req,res)=>{
    const todo = new Todo({title:"Mongoose", desc:"Mongoose Package is Good",isDone:true})
    todo.save()
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
})

