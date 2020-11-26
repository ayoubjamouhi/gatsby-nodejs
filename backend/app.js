import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(function(req, res, next) {
  const { io }= req.cookies;
  console.log(9);
  next();
});
app.use(cors());
app.use('/', router);

export default app;