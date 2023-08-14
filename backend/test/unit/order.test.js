const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const User = require('../../src/models/user');
const Order = require('../../src/models/order');

describe('POST /order', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  beforeEach( async () => {await User.deleteMany()});

  afterEach(async () => {
    await mongoose.connection.close();
  });

  test('should create a new order for an authenticated user', async () => {
    // Create a user with known credentials in the database
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'securepassword',
    };
    const newUser = await User.create(userData);

    // Log in the user to obtain a token
    const loginResponse = await request(app)
      .post('/api/users/login')
      .send({
        email: userData.email,
        password: userData.password,
      });

    const token = loginResponse.body.token;

    // Create a mock order data
    const orderData = {
      bookIds: ['bookId1', 'bookId2'],
      totalPrice: 100,
    };

    // Send a POST request to the /order route with the token and order data
    const response = await request(app)
      .post('/api/users/user/order')
      .set('Authorization', `Bearer ${token}`)
      .send(orderData)
      .expect(202); // Expecting a 202 Accepted status

    // Assertions on the response body
    expect(response.body.message).toBe('Order is successfully saved');
  });
});

describe('GET /orders', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  beforeEach( async () => {await User.deleteMany()});

  afterEach(async () => {
    await mongoose.connection.close();
  });

  test('should get user orders for an authenticated user', async () => {
    // Create a user with known credentials in the database
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'securepassword',
    };
    const newUser = await User.create(userData);

    // Create a mock order and associate it with the user
    const orderData = {
      bookIds: ['bookId1', 'bookId2'],
      totalPrice: 100,
    };
    const newOrder = await Order.create(orderData);
    newUser.orders.push(newOrder._id);
    await newUser.save();

    // Log in the user to obtain a token
    const loginResponse = await request(app)
      .post('/api/users/login')
      .send({
        email: userData.email,
        password: userData.password,
      });

    const token = loginResponse.body.token;

    // Send a GET request to the /orders route with the token
    const response = await request(app)
      .get('/api/users/user/orders')
      .set('Authorization', `Bearer ${token}`)
      .expect(200); // Expecting a 200 OK status

    // Assertions on the response body
    expect(response.body.status).toBe('ok');
    expect(response.body.orders).toHaveLength(1);
    expect(response.body.orders[0].toString()).toBe(newOrder._id.toString());
  });
});