const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/', (req, res) => {
  res.json('Fetching single user');
});

router.get('/:id', (req, res) => {
  res.json('Fetching all users');
});

module.exports = router;
