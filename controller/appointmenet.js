// logic for requesting apppointment in mongodb

// import doctor collection/model
const appointments = require('../models/appointmentSchema')

exports.addappointment = async  (req, res) => {
  const { patientName, doctorName, phonenumber,appointmentdate } = req.body;
 

  try {
    const appointment = await appointments.findOne({ patientName,phonenumber});

    if (appointment) {
      res.status(200).json("appointement already requested");
    } else {
        
      const newappointment = new appointments({
        patientName,
        doctorName,
        phonenumber,
        appointmentdate
    });


      await newappointment.save();
      res.status(200).json("your appointment request is sucessfull ,we will  conatct you  later");
    }
  } catch (error) {
    res.status(404).json(error);
  }
}


exports.allappointments=async (req,res)=>{ 
    try{
            const alldetails= await appointments.find()
            if(alldetails){
                res.status(200).json(alldetails)
            }else{
                res.status(200).json("appointment list is empty")
            }
    }catch(error){
        res.status(404).json(error)
    }
}


exports.deleteappointment=async(req,res)=>{
  console.log(req);
  console.log("hiiiii");
  const{phonenumber}=req.params
  try{
    console.log(phonenumber);
   const deleteappointment= await appointments.deleteOne(phonenumber)
   if(deleteappointment){
   
    const alldetails= await appointments.find()
    
        res.status(200).json(alldetails)
   }else{
    res.status(200).json("appointment list is empty")
}
}catch(error){
res.status(404).json(error)
}
}






