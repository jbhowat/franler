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

app.use('/api/users', users);

app.get('/api', (req, res) => {
  res.send('hello world from Express');
});

app.listen(1234);
