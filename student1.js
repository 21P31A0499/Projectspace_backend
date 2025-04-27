import mongoose from "mongoose";
const Schema = mongoose.Schema
const student1=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
   

})
export default mongoose.model('user',student1)//collection name,variable
