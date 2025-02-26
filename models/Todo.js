import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    userId: Number,
    id: Number,
    title: String,
    completed: Boolean
});

export const Todo = mongoose.model('Todo', todoSchema);