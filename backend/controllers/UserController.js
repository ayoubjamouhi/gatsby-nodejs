import bcrypt from 'bcrypt';
// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export async function signup(req, res) {
  req.body.email = req.body.email.toLowerCase();
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const user = await new User({ ...req.body, password }).save();
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);
    console.log({ cookkie: res.cookie });
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 yeqr
    });
    delete user.__v;
    res.json(user);
  } catch (e) {
    res.send('Error');
  }
}
