// defining schema for register patienet

// import mongoose
const mongoose=require('mongoose')


const patientSchema = new mongoose.Schema({
  patientId: {
    type: Number,
    required: true,
    unique: true
  },
  patientName: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  email:{
    type:String,
  },
  
  dateofbirth:{
    type: String,
    required:true
  }
});

const patients = mongoose.model('patients', patientSchema);

module.exports = patients;
