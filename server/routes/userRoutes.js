const express = require('express');
const router = express.Router();
const multer = require('multer');  // Import multer
const User = require('../models/User');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');  // Directory to store uploaded files
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);  // Unique filename
  }
});
const upload = multer({ storage: storage });  // Create upload middleware

// Handle user sign-up and file upload
router.post('/signup', upload.single('resume'), async (req, res) => {
  const { name, email, phone, qualifications } = req.body;
  const resume = req.file.path;

  try {
    const newUser = new User({ name, email, phone, qualifications, resume });
    await newUser.save();
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
