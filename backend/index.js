import mongoose  from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


//const app = require('./app');

import app from './app.js';

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${server.address().port}`)
});