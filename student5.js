import mongoose from "mongoose";
const Schema = mongoose.Schema
const student5=new Schema({
    username:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
  
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    }
  
    



})
export default mongoose.model('forms',student5)//collection name,variable
