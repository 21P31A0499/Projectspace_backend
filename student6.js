import mongoose from "mongoose";
const Schema = mongoose.Schema
const student6=new Schema({
    name:{
        type:String,
        required:true 
    },
    
  
    password:{
        type:String,
        required:true
    },
    
    



})
export default mongoose.model('validation',student6)//collection name,variable
