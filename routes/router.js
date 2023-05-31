

// import express
const express = require('express');
const router = express.Router();



// import controller
const register = require('../controller/register');
const registerDoctor = require('../controller/doctors');
const registerpatient=require('../controller/patients')
const requestappointment=require('../controller/appointmenet')

// import uploa middleware
const upload=require('../middleware/upload')
// Routes
router.post('/hospital/register-admin', register.registerAdmin);

router.post('/hospital/login-admin', register.LoginAdmin);

// Route for adding a doctor with (image)
router.post('/hospital/add-doctor', upload.single('file'), registerDoctor.adddoctor);

// router for getting doctor detailas
router.get('/hospital/get-doctordetails',registerDoctor.get_alldoctor_details)

// router for adding new patients
router.post('/hospital/add-patients',registerpatient.addpatients)

// router for getting all patient details
router.get('/hospital/get-allpatients',registerpatient.getallpatients)


// route for adding new appointment

router.post('/hospital/add-appointment',requestappointment.addappointment)

// router for viewing all appointment

router.get('/hospital/get-allappointment',requestappointment.allappointments)

// router for deleting all the appointments
router.delete('/hospital/deleteappointment/:id',requestappointment.deleteappointment)




module.exports = router;

