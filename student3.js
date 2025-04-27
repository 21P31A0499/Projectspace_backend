import mongoose from "mongoose";
const Schema = mongoose.Schema
const student3 = new Schema({
    courses:{
        type:String,
        required:true
    }
})
export default mongoose.model('courses',student3)