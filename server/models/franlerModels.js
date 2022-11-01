const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin_jbhowat:franlersoloproject@franlercluster0.nukjaqx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'franlerDB',
})
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model('user', userSchema);

module.exports = { User };
