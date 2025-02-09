const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/GetHubAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.log(err));

// JWT authentication middleware
const jwtAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Auth Error' });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

// Generating token
const generateToken = (userData) => {
  return jwt.sign({userData}, process.env.JWT_SECRET);
};

// User Schema
const SignUpSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  gender: String,
  phone: String,
  email: String,
  password: String
});

const SignUp = mongoose.model('SignUp', SignUpSchema);

// Signup route
app.post('/signupData', async (req, res) => {
  try {
    const { name, lastname, gender, phone, email, password } = req.body;
    const user = new SignUp({ name, lastname, gender, phone, email, password });
    const response = await user.save();
    
    // Generate token with user data
    const token = generateToken({ id: response._id, name: response.name, email: response.email });

    console.log("Generated Token:", token);
    
    return res.status(201).json({ message: 'User Created', token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Bad Request' });
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});