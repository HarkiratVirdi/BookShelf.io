const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middlewares/authUser');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/user/:id', protect, userController.getUser);

module.exports = router;
