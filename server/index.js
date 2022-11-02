/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();

const api = require('./routes/api');

const PORT = 1234;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

// global error handler route
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
// is this thing on?
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
