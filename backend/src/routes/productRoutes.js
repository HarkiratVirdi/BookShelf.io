const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { protect } = require('../middlewares/authUser');

//file uploads
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/books', protect, upload.single('image'), bookController.create);

router.get('/books', bookController.retrieve);

router.get('/books/:id', bookController.byId);

router.put('/books/:id', protect, bookController.update);

module.exports = router;
