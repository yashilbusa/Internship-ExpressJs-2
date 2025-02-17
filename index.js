import express from 'express';
import mongoose from 'mongoose';

const app = express()
const port = 3012


app.get("/",(req,res)=>{
    res.send("Hello World")
}).listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
})

await mongoose.connect("mongodb://localhost:27017/");
