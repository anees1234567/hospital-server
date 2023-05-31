const patients=require('../models/patientSchema')

exports.addpatients= async (req,res)=>{
    const {patientId,patientName,phonenumber,email,dateofbirth}=req.body

    console.log(req.body);

try {
    const patient = await patients.findOne({ patientId });

    if (patient) {
        
      res.status(200).json("patient already exists");
    } else {
        console.log("inside patient");
      const newpatient = new patients({
       patientId,
       patientName,
       phonenumber,
       email,
       dateofbirth
    });
   

      await newpatient.save();
      console.log("hiii");
      res.status(200).json("New patient added successfully to the hospital");
    }
  } catch (error) {
    console.log("hello");
    res.status(404).json(error);
  }
}


exports.getallpatients= async (req,res)=>{


try{
    const allpatients= await patients.find()
    if(allpatients){
        res.status(200).json(allpatients)
    }else{
        res.status(200).json("no patients in the hosptal")
    }
}catch(error){
        res.status(404).json(error)
}

  
}