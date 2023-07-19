const Book = require('../models/book');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const logger = require('../logger');

//post
exports.create = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
    user: req.user,
  });
  logger.debug({ book }, 'Saving book: ');

  try {
    await book.save();
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
    const bookList = await Book.find();
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
    const book = await Book.findById(id);

    if(book)
    {
      logger.debug('Found book: ' + book);
      res.status(200).json(
        createSuccessResponse({
          status: 'ok',
          book: book,
        })
        );
      }
  } catch (error) {
    res.status(406).json(createErrorResponse(406, 'Error retrieving a book'));
    logger.error({ error, id }, 'Unable to get book by id');
    next(error);
  }
};

//get by category
exports.byCat = async (req, res, next) => {
  const category = req.params.category;
  try {
    var books = await Book.find({}).select({ category: category });
    logger.debug('Found books: ' + books);

    res.status(200).json(
      createSuccessResponse({
        status: 'ok',
        books: books,
      })
    );
  } catch (error) {
    res.status(407).json(createErrorResponse(407, 'Error retrieving books by category'));
    logger.error({ error, category }, 'Unable to get books by category');
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
