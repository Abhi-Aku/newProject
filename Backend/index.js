const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
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
const generateToken = (user) => {
  return jwt.sign({user}, process.env.JWT_SECRET);
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
    // Generate token

  const paylod = {
     name: response.name, 
    email: response.email 
  };


    const token = generateToken( paylod);
    console .log(token);

    
    

    return res.status(201).json({ message: 'User Created',response :token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Bad Request' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});