const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  age:Number
});

module.exports  = mongoose.model('Contact', ContactSchema);
