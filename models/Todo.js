import mongoose from 'mongoose';

const todos = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});

export const Todo = mongoose.model('Todo', todos);