// defining schema for appointment

// import mongoose
const mongoose=require('mongoose')


const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    unique: true
  },
  doctorName: {
    type: String,
    required: true
  },
  
  phonenumber:  {
    type:Number,
    required:true
  },
  appointmentdate:{
    type:String,
    required:true
  }

    
    

});

const appointments = mongoose.model('appointments', appointmentSchema);

module.exports = appointments;