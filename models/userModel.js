const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please tell us your email id'],
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email id'],
  },
  photo: String,
  password: {
    type: String,
    require: [true, 'Please enter a password'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    require: [true, 'Please enter a password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
