import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: String,
  age:Number
});

export default mongoose.model('Contact', ContactSchema);
