const path=require('path')


// import multer
const multer = require('multer');


// Define the multer storage and file filter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'upload'); // Save the image to the uploads folder
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname)
    cb(null, Date.now() + ext); // Rename the image file with timestamp
  }
});


const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Check if the file is an image
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Only image files are allowed!'))
    }
    cb(null, true);
  }
 
});

module.exports=upload