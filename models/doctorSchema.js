// defining schema for register

// import mongoose
const mongoose=require('mongoose')


const doctorSchema = new mongoose.Schema({
  doctorId: {
    type: Number,
    required: true,
    unique: true
  },
  doctorName: {
    type: String,
    required: true
  },
  doctorCategory: {
    type: String,
    required: true
  },
  doctorImage:  {
    type:String
  }
    
    

});

const doctors = mongoose.model('doctors', doctorSchema);

module.exports = doctors;
