const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
//file uploads
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/books', upload.single('image'), bookController.create);

router.get('/books', bookController.retrieve);

router.get('/books/:id', bookController.byId);

router.put('/books/:id', bookController.update);

module.exports = router;
