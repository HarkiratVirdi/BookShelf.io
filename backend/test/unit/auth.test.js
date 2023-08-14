const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose')
const User = require('../../src/models/user');

describe('POST /register', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  beforeEach( async () => {await User.deleteMany()});

  afterEach(async () => {
    await mongoose.connection.close();
  });
  
  test('should register a new user', async () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'securepassword',
    };

    // Send a POST request to the /register route
    const response = await request(app)
      .post('/api/users/register')
      .send(userData)
      .expect(201); // Expecting a 201 Created status

    // Assertions on the response body
    expect(response.body.status).toBe('ok');
    expect(response.body._id).toBeDefined();
    expect(response.body.firstName).toBe(userData.firstName);
    expect(response.body.lastName).toBe(userData.lastName);
    expect(response.body.email).toBe(userData.email);
    expect(response.body.token).toBeDefined();
  });

  test('should return 400 if user already exists', async () => {
    const userData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      password: 'anotherpassword',
    };

      // Create a user with the same email in the database
      await User.create(userData);

      // Send a POST request to the /register route
      const response = await request(app)
        .post('/api/users/register')
        .send(userData)
        .expect(400); // Expecting a 400 Bad Request status

      // Assertions on the response body
      expect(response.body.error.message).toBe('User already exists. Please Login');
  });
});

describe('POST /login', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  beforeEach(async () => {
    await User.deleteMany();
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  test('should log in a user with valid credentials', async () => {
    // Create a user with known credentials in the database
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'securepassword',
    };
    await User.create(userData);

    // Send a POST request to the /login route with valid credentials
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: userData.email,
        password: userData.password,
      })
      .expect(200); // Expecting a 200 OK status

    // Assertions on the response body
    expect(response.body.status).toBe('ok');
    expect(response.body._id).toBeDefined();
    expect(response.body.firstName).toBe(userData.firstName);
    expect(response.body.lastName).toBe(userData.lastName);
    expect(response.body.email).toBe(userData.email);
    expect(response.body.token).toBeDefined();
  });

  test('should return 401 for invalid login credentials', async () => {
    // Create a user with known credentials in the database
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: 'securepassword',
    };
    await User.create(userData);

    // Send a POST request to the /login route with invalid credentials
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: userData.email,
        password: 'incorrectpassword',
      })
      .expect(401); // Expecting a 401 Unauthorized status

    // Assertions on the response body
    expect(response.body.error.message).toBe('Invalid email or password');
  });
});






