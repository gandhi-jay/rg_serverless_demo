const mongoose = require('mongoose');
const validator = require('validator');


const model = mongoose.model('User', {
  feedback: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
});

module.exports = model;
