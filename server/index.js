/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const MONGO_URI = 'mongodb+srv://admin_jbhowat:franlersoloproject@franlercluster0.nukjaqx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'franlerDB',
})
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => console.log(err));

const users = require('./routes/users');
const api = require('./routes/api');

// app.use('/api/users', users);

app.use('/api', api);
// app.get('/api', (req, res) => {
//   res.send('hello world from Express');
// });

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
app.listen(1234, () => {
  console.log('Server listening on port 1234');
});
