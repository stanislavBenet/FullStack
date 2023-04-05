const express = require('express');
const cors = require('cors');
const {
  errorValidateHandle,
  errorHandle,
} = require('./middlewares/error.handlers');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api', router);

app.use(errorValidateHandle);
app.use(errorHandle);

module.exports = app;
