// logic for adding a doctoe in mongodb

// import doctor collection/model
const doctors = require('../models/doctorSchema')

exports.adddoctor = async  (req, res) => {
  const { doctorId, doctorName, doctorCategory } = req.body;
  const file = req.file;
  console.log(file);
  console.log(req.body);

  try {
    const doctor = await doctors.findOne({ doctorId });

    if (doctor) {
      res.status(200).json("Doctor already exists");
    } else {
        
      const newDoctor = new doctors({
        doctorId,
        doctorName,
        doctorCategory,
        doctorImage:req.file.path

    });


      await newDoctor.save();
      res.status(200).json("New doctor added successfully to the hospital");
    }
  } catch (error) {
    res.status(404).json(error);
  }
}

exports.get_alldoctor_details = async (req, res) => {
  try {
    const alldoctors = await doctors.find();
    if (alldoctors) {
      const doctorsWithImages = alldoctors.map((doctor) => {
        const doctorObj = doctor.toObject();
        doctorObj.doctorImage = `${req.protocol}://${req.get(
          "host"
        )}/${doctor.doctorImage}`;
        return doctorObj;
      });
      res.status(200).json(doctorsWithImages);
    } else {
      res.status(404).json({ message: "No doctors found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


