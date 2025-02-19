import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    id:Number,
    name:String,
    active:Boolean,
    grades:Array,
    yearsOld:Number,
    color:String
});

export const StudentData = mongoose.model('StudentData', StudentSchema);