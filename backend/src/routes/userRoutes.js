const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const addressController = require('../controllers/addressController');
const { protect } = require('../middlewares/authUser');

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/user', protect, userController.getUser);

router.put('/user', protect, userController.updateUser);

router.delete('/user', protect, userController.deleteUser);

router.post('/address', protect, addressController.addAddress);

module.exports = router;
