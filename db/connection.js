// define connection between node nad mongoose

const mongoose=require('mongoose')

// get connection string from env

const DB=process.env.database

// connect mongodb
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("database connected successfully");
}).catch((error)=>{
    console.log(error);
})