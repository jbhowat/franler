/* eslint-disable no-console */
const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.result);
});

router.post('/users', userController.newUser, (req, res) => {
  console.log(`New user ${res.locals.result[0].username} added to database`);
  res.status(200).json(res.locals.result);
});

module.exports = router;
