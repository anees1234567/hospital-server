
// import dotenv file

require('dotenv').config()

// impott express
const express=require("express")


// import cors
const cors = require('cors')


//create server app using express
const server = express()





// use cors and express.json to your server app

server.use(cors())

server.use(express.json())

// import router
const router=require('./routes/router')

// use router in app
server.use(router)

server.use('/upload',express.static('upload'))

// // import connection js file

require('./db/connection')


// creating port for listening your server appliction

const port=3000

// run the server application  in the speccifeid port

server.listen(port,()=>{
    console.log(`server is strated to listen at port: ${port}`);
})

// apt testing
server.get('/',(req,res)=>{
    res.status(200).json("hospital server is started at port 3000")
})










 





       
       
 
   








  