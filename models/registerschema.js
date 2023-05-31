// defining schema for register

// import mongoose
const mongoose=require('mongoose')


// using mongoose to define register schema

const adminregisterSchema=mongoose.Schema({

        staffId:{
            type:Number,
            required:true,
            unique:true
        },
        username:{
            type:String,
            required:true
        },
        phonenumber:{
            type:String,
            required:true
        },
        password:{
            type:String,
            requied:true
        }
})

const admins=mongoose.model("admins",adminregisterSchema)

module.exports= admins
