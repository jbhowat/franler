/* eslint-disable no-console */
const models = require('../models/franlerModels');

const pollController = {};

pollController.getPoll = (req, res, next) => {
  models.Poll.find({})
    .then((result) => {
      res.locals.result = result;
      return next();
    })
    .catch((err) => next(err));
};

pollController.newPoll = (req, res, next) => {
  const {
    title,
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
  } = req.body[0];
  models.Poll.create({
    title,
    option1,
    option2,
    option3,
    option4,
    option5,
    option6,
  }, (err, poll) => {
    if (err) return next(err);
    res.locals.result = poll;
    return next();
  });
};

module.exports = pollController;
