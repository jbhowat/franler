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

//! due to scaling down of scope, userSchema is not used and also not exported!
// const userSchema = new Schema({
//   username: String,
//   password: String,
//   firstname: String,
//   lastname: String,
//   polls: [{
//     id: {
//       type: Schema.Types.ObjectId,
//       ref: 'poll',
//     },
//   }],
// });
// const User = mongoose.model('user', userSchema);

const pollSchema = new Schema({
  title: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  option5: String,
  option6: String,
});

const Poll = mongoose.model('poll', pollSchema);

module.exports = { Poll };
