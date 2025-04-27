import mongoose from "mongoose";
const Schema = mongoose.Schema
const student4=new Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },



})
export default mongoose.model('employees',student4)//collection name,variable
