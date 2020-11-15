const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());
app.use('/', router);

module.exports = app;