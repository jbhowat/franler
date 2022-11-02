const models = require('../models/franlerModels');

const userController = {};

userController.getUsers = (req, res, next) => {
  models.User.find({})
    .then((result) => {
      res.locals.result = result;
      return next();
    })
    .catch((err) => next(err));
};

userController.newUser = (req, res, next) => {
  const {
    username,
    password,
    firstname,
    lastname,
  } = req.body[0];
  console.log(req.body[0]);
  models.User.create([{
    username,
    password,
    firstname,
    lastname,
  }], (err, user) => {
    if (err) return next(err);
    res.locals.result = user;
    return next();
  });
};

module.exports = userController;
