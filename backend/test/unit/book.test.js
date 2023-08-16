const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const Book = require('../../src/models/book');
const User = require('../../src/models/user');
const path =require('path');


describe('Book-related API', () => {
    let token;
    let newUser;
    let userData;
    let bookData;
    let bookId;
  
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI);
        await User.deleteMany();
        await Book.deleteMany();
        // Create a user with known credentials in the database
        userData = {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        password: 'securepassword',
        };
        newUser = await User.create(userData);

        // Log in the user to obtain a token
        const loginResponse = await request(app)
        .post('/api/users/login')
        .send({
            email: userData.email,
            password: userData.password,
        });

        token = loginResponse.body.token;

        // Create form data for book creation
        bookData = {
            title: 'Test Book',
            author: 'Test Author',
            genre: ['Fiction'],
            price: 20,
            description: 'This is a test book',
        };
    });
    
    afterAll(async () => {
      await mongoose.connection.close();
    });

    test('should create a new book', async () => {
        // Send a POST request to the /books route with the token and book data
        const response = await request(app)
        .post('/api/products/book')
        .set('Authorization', `Bearer ${token}`)
        .field('title', bookData.title)
        .field('author', bookData.author)
        .field('genre', JSON.stringify(bookData.genre))
        .field('price', bookData.price)
        .field('description', bookData.description)
        .attach('image', path.resolve(__dirname, './test.png'))
        .expect(202); // Expecting a 202 Accepted status

        // Assertions on the response body
        expect(response.body.message).toBe('Book is successfully saved');
    });

    test('should retrieve books by genre', async () => {
        const genre = 'Fiction';
        const response = await request(app)
          .get('/api/products/books')
          .query({ genre })
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
    
        bookId = response.body.books[0]._id;
        expect(response.body.status).toBe('ok');
        expect(response.body.books).toBeDefined();
    });

    test('should retrieve books by author', async () => {
        const author = 'Test Author';
        const response = await request(app)
          .get('/api/products/books')
          .query({ author })
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
    
        expect(response.body.status).toBe('ok');
        expect(response.body.books).toBeDefined();
    });

    test('should retrieve books by title', async () => {
        const title = 'Test Book';
        const response = await request(app)
          .get('/api/products/books')
          .query({ title })
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
    
        expect(response.body.status).toBe('ok');
        expect(response.body.books).toBeDefined();
    });

    test('should retrieve books by user', async () => {
        const response = await request(app)
          .get('/api/products/books/user')
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
    
        expect(response.body.status).toBe('ok');
        expect(response.body.books).toBeDefined();
    });

    test('should retrieve a book by id', async () => {
        const response = await request(app)
          .get(`/api/products/book/${bookId}`)
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
    
        expect(response.body.status).toBe('Found book');
        expect(response.body.book.title).toBe('Test Book');
    });

    // Test 'update' function
    test('should update a book', async () => {
        const response = await request(app)
        .put(`/api/products/book/${bookId}`)
        .set('Authorization', `Bearer ${token}`)
        .field('title', 'Updated Book Title')
        .field('author', 'Updated Author')
        .field('genre', JSON.stringify(['Updated Genre']))
        .field('price', 15.99)
        .field('description', 'Updated Description')
        .attach('image', path.resolve(__dirname, './test.png'))
        .expect(200);

        expect(response.body.status).toBe('Book updated');
        expect(response.body.id).toBe(bookId.toString());
    });

    // Test 'delete' function
    test('should delete a book', async () => {
        await request(app)
        .delete(`/api/products/book/${bookId}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

        // Verify that the book is deleted
        const deletedBook = await Book.findById(bookId);
        expect(deletedBook).toBeNull();
    });
});
