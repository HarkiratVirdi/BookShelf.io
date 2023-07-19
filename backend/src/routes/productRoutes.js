const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/books', bookController.create);
router.get('/books', bookController.retrieve);
router.get('/book/:id', bookController.byId);
router.get('/books/:category', bookController.byCat);
router.put('/books/:id', bookController.update);

router.get('/books/:author', bookController.byAut);

module.exports = router;
