const Book = require('../models/book');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');
const { saveImage } = require('../aws');
const { randomUUID } = require('crypto');
const mongoose = require('mongoose');

//post
//create new book
exports.create = async (req, res) => {
  const imageId = randomUUID();
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    price: req.body.price,
    description: req.body.description,
    user: req.user.id,
    image: `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_S3_BUCKET_NAME}/${imageId}`,
  });

  try {
    await book.save();
    saveImage(imageId, req.file.buffer);
    logger.debug({ book }, 'Saving book: ');
    logger.info({ book }, 'Save book: success');
    res.status(202).json(createSuccessResponse({ message: 'Book is successfully saved' }));
  } catch (error) {
    const err = error.message;
    logger.debug({ err }, 'Mongoose SAVE PASSED error: ');
    logger.error({ error }, 'Error saving a book');
    res.status(403).json(createErrorResponse(403, 'Error saving a book'));
  }
};

//get all books
//get books by genre
//get books by author
//get books by title
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
    logger.error({ error }, 'Unable to get any books');
    res.status(405).json(createErrorResponse(405, 'Error retrieving books'));
  }
};

//get book by id
exports.byId = async (req, res, next) => {
  const id = req.params.id;
  try {
    var book = await Book.findById(id);
    logger.debug('Found book: ' + book);

    res.status(200).json(
      createSuccessResponse({
        status: 'Found book',
        book: book,
      })
    );
  } catch (error) {
    logger.error({ error, id }, 'Unable to get book by id');
    res.status(406).json(createErrorResponse(406, 'Error retrieving a book'));
    next(error);
  }
};

//update book info
exports.update = async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    res.status(404).json(createErrorResponse({ status: 'Page not found' }));
  }
  try {
    const foundBook = await Book.findById(id);
    if (!foundBook) {
      logger.debug('Book with this id is not found: ' + id);
      res.status(404).json(createErrorResponse({ status: 'Book is not found' }));
    } else {
      logger.debug('Found book' + foundBook);
      const currentUser = req.user.id;
      const bookOwner = foundBook.user;
      if (currentUser != bookOwner) {
        logger.debug({ currentUser, bookOwner, id }, 'User is not the owner of book post: ');
        res
          .status(407)
          .json(createErrorResponse({ status: 'User is unauthorized to update a book' }));
      } else {
        const updateFields = {
          title: req.body.title,
          author: req.body.author,
          genre: req.body.genre,
          price: req.body.price,
          description: req.body.description,
        };
        const updatedBook = await Book.findOneAndUpdate({ _id: id }, updateFields);
        logger.info(`Book with id ${id} was successfully updated`);
        res.status(200).json(createSuccessResponse({ status: 'Book updated', id: id }));
      }
    }
  } catch (error) {
    logger.error({ error, id }, 'ERROR. Book is not updated.');
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const currentUser = req.user.id;
  const id = req.params.id;
  try {
    const foundBook = await Book.findById(id);
    const bookOwner = foundBook.user;
    if (!foundBook) {
      logger.debug('Book with this id is not found: ' + id);
      res.status(404).json(createErrorResponse({ status: 'Book is not found' }));
    } else if (currentUser != bookOwner) {
      logger.debug({ currentUser, bookOwner, id }, 'User is not the owner of book post: ');
      res
        .status(407)
        .json(createErrorResponse({ status: 'User is unauthorized to delete a book' }));
    } else {
      logger.debug('Deleting book: ' + id);
      await Book.findByIdAndDelete(id);
      res.status(200).json(createSuccessResponse({ status: 'Book deleted: ', id: id }));
    }
  } catch (error) {
    logger.error({ error, ownerId, id }, 'ERROR. Book is not deleted');
    next(error);
  }
};
