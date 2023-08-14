const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { protect } = require('../middlewares/authUser');

//file uploads
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/book', protect, upload.single('image'), bookController.create);

router.get('/books/user', protect, bookController.retrieveUserBooks);

router.get('/books', bookController.retrieve);

router.get('/book/:id', bookController.byId);

router.put('/book/:id', protect, upload.single('image'), bookController.update);

router.delete('/book/:id', protect, bookController.delete);

router.get('/books/:author', bookController.byAut);
router.get('/books/:searchResults', bookController.searchBook);

module.exports = router;
