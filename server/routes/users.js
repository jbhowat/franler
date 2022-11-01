const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      username: 'jbhowat',
      age: 36,
    },
    {
      username: 'test123',
      age: 25,
    },
  ]);
});

module.exports = router;
