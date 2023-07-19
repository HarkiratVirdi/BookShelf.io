const Book = require('../models/book');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');
const { saveImage } = require('../aws');
const { randomUUID } = require('crypto');

//post
exports.create = async (req, res) => {
  const imageId = randomUUID();
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    price: req.body.price,
    description: req.body.description,
    user: req.user,
    image: `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_S3_BUCKET_NAME}/${imageId}`,
  });

  try {
    await book.save();
    saveImage(imageId, req.file.buffer);
    logger.debug({ book }, 'Saving book: ');
    res.status(202).json(createSuccessResponse({ message: 'Book is successfully saved' }));
    logger.info({ book }, 'Save book: success');
  } catch (error) {
    const err = error.message;
    logger.debug({ err }, 'Mongoose SAVE PASSED error: ');
    res.status(403).json(createErrorResponse(403, 'Error saving a book'));
    logger.error({ error }, 'Error saving a book');
  }
};

//get
exports.retrieve = async (req, res) => {
  try {
    const { genre, author, title } = req.query;
    let query = {};

    if (genre) query.genre = genre;
    if (author) query.author = author;
    if (title) query.title = title;

    const bookList = await Book.find(query);
    res.status(200).json(
      createSuccessResponse({
        status: 'ok',
        books: bookList || [],
      })
    );
  } catch (error) {
    res.status(405).json(createErrorResponse(405, 'Error retrieving books'));
    logger.error({ error }, 'Unable to get any books');
  }
};

//get by id
exports.byId = async (req, res, next) => {
  const id = req.params.id;
  try {
    var book = await Book.findById(id);
    logger.debug('Found book: ' + book);

    res.status(200).json(
      createSuccessResponse({
        status: 'ok',
        book: book,
      })
    );
  } catch (error) {
    res.status(406).json(createErrorResponse(406, 'Error retrieving a book'));
    logger.error({ error, id }, 'Unable to get book by id');
    next(error);
  }
};

//update
exports.update = async (req, res, next) => {
  const id = req.params.id;
  try {
    var book = await Book.findById(id);
    logger.debug('Found book: ' + book);
    var newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
      user: req.user,
    });
    logger.debug({ newBook }, 'Updating book: ');
    try {
      await Book.findByIdAndDelete({ _id: id });
      await newBook.save();
      logger.info(`Book with id ${id} was successfully updated`);
      res.status(200).json(createSuccessResponse({ status: 'ok', book: newBook }));
    } catch (err) {
      logger.error({ error, id }, 'Unable to update book data');
    }
  } catch (error) {
    res.status(404).json(createErrorResponse({ status: 'Book not found' }));
    logger.error({ error, id }, 'Unable to get book with this id');
    next(error);
  }
};
