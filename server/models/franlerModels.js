/* eslint-disable no-console */
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin_jbhowat:franlersoloproject@franlercluster0.nukjaqx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'franlerDB',
})
  .then(() => console.log('Server Connected to MongoDB in franlerModels'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  polls: [{
    id: {
      type: Schema.Types.ObjectId,
      ref: 'poll',
    },
  }],
});

const User = mongoose.model('user', userSchema);

const pollSchema = new Schema({
  option1: {
    option: String,
    points: Number,
  },
  option2: {
    option: String,
    points: Number,
  },
  option3: {
    option: String,
    points: Number,
  },
  option4: {
    option: String,
    points: Number,
  },
  option5: {
    option: String,
    points: Number,
  },
  option6: {
    option: String,
    points: Number,
  },
  endtime: Number,
});

const Poll = mongoose.model('poll', pollSchema);

module.exports = { User, Poll };
