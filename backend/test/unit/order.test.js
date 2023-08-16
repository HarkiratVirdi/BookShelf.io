const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const User = require('../../src/models/user');
const Order = require('../../src/models/order');

describe('Order-related API', () => {
  let token;
  let newUser;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteMany();
    await Order.deleteMany();

    // Create a user with known credentials in the database
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
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
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should create a new order for an authenticated user', async () => {
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


  test('should get user orders for an authenticated user', async () => {

    // Create mock orders and associate them with the user
    const orderData1 = {
      bookIds: ['bookId1', 'bookId2'],
      totalPrice: 50,
    };
    const order1 = await Order.create(orderData1);
    newUser.orders.push(order1._id);

    const orderData2 = {
      bookIds: ['bookId3', 'bookId4'],
      totalPrice: 60,
    };
    const order2 = await Order.create(orderData2);
    newUser.orders.push(order2._id);
    await newUser.save();

    // Send a GET request to the /orders route with the token
    const response = await request(app)
      .get('/api/users/user/orders')
      .set('Authorization', `Bearer ${token}`)
      .expect(200); // Expecting a 200 OK status

    // Assertions on the response body
    expect(response.body.status).toBe('ok');
    expect(response.body.orders).toHaveLength(3);
    expect(response.body.orders[1]._id).toBe(order1._id.toString());
    expect(response.body.orders[2]._id).toBe(order2._id.toString());
  });
});