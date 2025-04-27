
import  express  from "express";
import nodemailer from "nodemailer"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import student from'./models/student';
import student3 from "./models/student3";
import student4 from "./models/student4";
import student5 from "./models/student5";
//import multer from "multer";
import multer from "multer";
import student6 from "./models/student6";
//import student1 from'./models/student1';
//import student2 from'./models/student2';
//const cors = require(cors)
//const bodyParser = require('body-parser')
//const cors = require(cors)

//const express=require("express")
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://leelasunithamalireddy:OvEqHLfddW1tZByV@cluster0.jfsnsqz.mongodb.net/DriveReady?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>app.listen(5000))
.then(()=>
console.log("Connected to Database & Listening to localhost 5000 ")
).catch((err)=>console.log(err));
//http:localhost:5000/addstudent
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
app.post('/addstudent5',upload.single('myfile'),(req,res,next)=>{
    // console.log(req.body)
    const profile=(req.file) ? req.file.filename:null
  
    const{username,email,password}=req.body
    
    const stud=new student5({
       username,
       email,
       password,
       profile
     })
    stud.save()
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'leelasunithamalireddy@gmail.com',
          pass: 'vziw nmep yggp rkqa'
        }
      });
      
      var mailOptions = {
        from: 'leelasunithamalireddy@gmail.com',
        to: email,
        subject: 'Cours Registeration',
        text: 'Thanks for registering in to the course'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          return res.status(200).json({msg:"success"})
        }
        
      });

})


//app.post('/addstudent',(req,res,next)=>{
    app.post('/addstudent',(req,res,next)=>{
    console.log(req.body.formdata)
   // const{name ,rollno ,college,branch}=req.body.formdata
    const{name,rollno,college,branch}=req.body.formdata
    // const stud=new student({
    //     name,
    //     rollno,
    //     college,
    //     branch
    // })
    // const stud=new student1({
    //    email,
    //    password
    // })
    const stud=new student({
       name,
       rollno,
       college,
       branch
     })
    stud.save()
    return res.send({"students":stud})
    //res.send({"msg":"success"})
})


// // app.use('/testing',(req,res,next)=>
// {
//     res.send("Sunitha")
// })

// app.listen(3333)

//backend://api
//http://localhost:3333/api
{/*app.post('/addstudent2',(req,res,next)=>{
    const {fsd,aws,dataanalytics} =req.body.formdata2;
    const student2 =new user({
       fsd,
       dataanalytics
    })
    try{
        student2.save()
    }
    catch(err){
        console.log(err)
    }
    return res.status(200).json({student2})
})*/}
// app.get('/getuser',async (req,res,next)=>{
//     let usersdata;
//     try{
//         usersdata=await user.find();
//     }
//     catch(err){
//         console.log(err);
//     }
//     if(!usersdata){
//         return res.status(404).json({message:"no users found"})
//     }
//     return res.status(200).json({usersdata})
    

// })
app.get('/getstudent',async (req,res,next)=>{
    let studentdata;
    try{
        studentdata=await student.find();
    }
    catch(err){
        console.log(err);
    }
    if(!studentdata){
        return res.status(404).json({message:"no students found"})
    }
    return res.status(200).json({studentdata})
    

})
app.delete('/deleteuser/:id',async(req,res,next)=>{
    const _id = req.params.id
    let studentdata
    try{
        studentdata=await student.findByIdAndDelete(_id)
    }
    catch(err){
        console.log(err)
    }
    if(!studentdata){
        return res.status(404).json({message:"No Users found"})

    }
    return res.status(200).json({studentdata})
})
app.get('/getstudentbyid/:id',async (req,res,next)=>{
    const _id=req.params.id
    let studentdata;
    try{
        studentdata=await student.findById(_id);
    }
    catch(err){
        console.log(err);
    }
    if(!studentdata){
        console.log("no users found")
    }
    return res.status(200).json({studentdata})
    

})
app.put('/updatestudent/:id',async(req,res,next)=>{
    const _id=req.params.id
    const {name,rollno,college,branch} =req.body.formdata
    let stud;
    try{
        stud= await student.findByIdAndUpdate
        (_id,{name,rollno,college,branch});
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"updated","result":stud})
})
app.post('/addstudent3',(req,res,next)=>{
    console.log(req.body.formdata3)
  
    const{courses}=req.body.formdata3
    
    const stud=new student3({
       courses
     })
    stud.save()
    return res.send({"courses":stud})
})
app.get('/getstudent3byid/:id',async (req,res,next)=>{
    const _id=req.params.id
    let studentdata3;
    try{
        studentdata3=await student3.findById(_id);
    }
    catch(err){
        console.log(err);
    }
    if(!studentdata3){
        console.log("no users found")
    }
    return res.status(200).json({studentdata3})
    

})
app.get('/getstudent3',async (req,res,next)=>{
    let studentdata3;
    try{
        studentdata3=await student3.find();
    }
    catch(err){
        console.log(err);
    }
    if(!studentdata3){
        return res.status(404).json({message:"no students found"})
    }
    return res.status(200).json({studentdata3})
    

})
app.delete('/deleteuser3/:id',async(req,res,next)=>{
    const _id = req.params.id
    let studentdata3
    try{
        studentdata3=await student3.findByIdAndDelete(_id)
    }
    catch(err){
        console.log(err)
    }
    if(!studentdata3){
        return res.status(404).json({message:"No Users found"})

    }
    return res.status(200).json({studentdata3})
})
app.put('/updatestudent3/:id',async(req,res,next)=>{
    const _id=req.params.id
    const {course} =req.body.formdata3
    let stud;
    try{
        stud= await student3.findByIdAndUpdate
        (_id,{course});
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"updated","result":stud})
})
app.post('/addstudent4',(req,res,next)=>{
    console.log(req.body.formdata4)
  
    const{fname,lname,email,salary,date}=req.body.formdata4
    
    const stud=new student4({
       fname,
       lname,
       email,
       salary,
       date

     })
    stud.save()
    return res.send({"employees":student4})
})
app.get('/getstudent4',async (req,res,next)=>{
    let studentdata4;
    try{
        studentdata4=await student4.find();
    }
    catch(err){
        console.log(err);
    }
    if(!studentdata4){
        return res.status(404).json({message:"no students found"})
    }
    return res.status(200).json({studentdata4})
    

})
app.delete('/deleteuser4/:id',async(req,res,next)=>{
    const _id = req.params.id
    let studentdata4
    try{
        studentdata4=await student4.findByIdAndDelete(_id)
    }
    catch(err){
        console.log(err)
    }
    if(!studentdata4){
        return res.status(404).json({message:"No Users found"})

    }
    return res.status(200).json({studentdata4})
})
app.get('/getstudent4byid/:id',async (req,res,next)=>{
    const _id=req.params.id
    let studentdata4;
    try{
        studentdata4=await student4.findById(_id);
    }
    catch(err){
        console.log(err);
    }
    if(!studentdata4){
        console.log("no users found")
    }
    return res.status(200).json({studentdata4})
    

})
app.put('/updatestudent4/:id',async(req,res,next)=>{
    const _id=req.params.id
    const {fname,lname,email,salary,date} =req.body.formdata4
    let stud;
    try{
        stud= await student4.findByIdAndUpdate
        (_id,{fname,lname,email,salary,date});
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"updated","result":stud})
})
app.post('/addstudent6',(req,res,next)=>{
    console.log(req.body.formdata6)
  
    const{name,password}=req.body.formdata6
    
    const stud=new student6({
       name,
       password
     })
    stud.save()
    return res.send({"validation":stud})
})

