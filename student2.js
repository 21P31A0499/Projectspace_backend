// import mongoose from "mongoose";
// const Schema = mongoose.Schema
// const student2=new Schema({
//    course:{
//     type:String,
//     required:true
//    }

// })
// export default mongoose.model('courses',student2)//collection name,variable
import mongoose from "mongoose";
const Schema = mongoose.Schema
const student2 = new Schema({
    courses:{
        type:String,
        required:true
    }
})
export default mongoose.model('courses',student2)