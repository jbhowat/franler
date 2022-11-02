const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.result);
});

router.post('/users', (req, res) => {
  res.sendStatus(200);
  console.log(req.body);
});

module.exports = router;
