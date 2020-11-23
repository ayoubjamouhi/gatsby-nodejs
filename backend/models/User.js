import mongoose from "mongoose";

const User = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    index: true
  },
  password: String,
  permission: {
    type: String,
    enum: ['USER', 'ADMIN'],
    required: true
  }
});

export default mongoose.model('User', User);