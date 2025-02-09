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
app.post('/Data', async (req, res) => {
  try {
    const { name, lastname, gender, phone, email, password } = req.body;
    const user = new SignUp({ name, lastname, gender, phone, email, password });
    const response = await user.save();

    // payload
    const payload = {
       id: response._id, 
       name: response.name,
        email: response.email
       };
    
    const token = generateToken(payload,{expiresIn: '1h'}); 

    console.log("Generated Token:", token);
    return res.status(201).json({ message: 'User Created', token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Bad Request' });
  }
});
// Login route

app.post('/LoginData', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await SignUp.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    if (user.password === password) {
      const payload = {
        id: user._id,
        email: user.email
      };
      const token = generateToken(payload);
      return res.status(200).json({ message: 'Login success', token });
    } else {
      return res.status(400).json({ message: 'Not login' });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Bad Request' });
  }
});

// get user data 
app.get ('/Data', async (req, res) => {
  try {
    const user = await SignUp.find();
    return res.status(200).json(user);

  }catch(err){
    console.log (err);
    return res.status(400).json({ message: 'Bad Request' });  

  }
})



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});