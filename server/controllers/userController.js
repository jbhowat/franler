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

module.exports = userController;
