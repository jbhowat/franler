const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getUsers, (req, res) => {
  res.status(200).json(res.locals.result);
});

module.exports = router;
