const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose')
const User = require('../../src/models/user');

describe('GET /user', () => {
    beforeEach(async () => {
      await mongoose.connect(process.env.MONGO_URI);
    });

    beforeEach( async () => {await User.deleteMany()});
  
    afterEach(async () => {
      await mongoose.connection.close();
    });
  
    test('should get user information for an authenticated user', async () => {
      // Create a user with known credentials in the database
      const userData = {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
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
  
      // Send a GET request to the /user route with the token
      const response = await request(app)
        .get('/api/users/user')
        .set('Authorization', `Bearer ${token}`)
        .expect(200); // Expecting a 200 OK status
  
      // Assertions on the response body
      expect(response.body.status).toBe('Found user');
      expect(response.body.id).toBe(newUser._id.toString());
      expect(response.body.firstName).toBe(userData.firstName);
      expect(response.body.lastName).toBe(userData.lastName);
      expect(response.body.email).toBe(userData.email);
    });
  
    test('should return 401 for an unauthenticated user', async () => {
      // Send a GET request to the /user route without a token
      const response = await request(app)
        .get('/api/users/user')
        .expect(401); // Expecting a 401 Unauthorized status
  
      // Assertions on the response body
      expect(response.body.message).toBe('Not Authorized, no token');
    });
  });

  describe('PUT /user', () => {
    beforeEach(async () => {
      await mongoose.connect(process.env.MONGO_URI);
    });

    beforeEach( async () => {await User.deleteMany()});
  
    afterEach(async () => {
      await mongoose.connection.close();
    });
  
    test('should update user information for an authenticated user', async () => {
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
  
      // Send a PUT request to the /user route with updated data and the token
      const updatedUserData = {
        firstName: 'UpdatedJohn',
        lastName: 'UpdatedDoe',
        email: 'updatedjohn@example.com',
      };
  
      const updateResponse = await request(app)
        .put('/api/users/user')
        .set('Authorization', `Bearer ${token}`)
        .send(updatedUserData)
        .expect(200); // Expecting a 200 OK status
  
      // Assertions on the response body
      expect(updateResponse.body.status).toBe('User info updated');
      expect(updateResponse.body.id).toBe(newUser._id.toString());
    });
  });
  
  describe('DELETE /user', () => {
    beforeEach(async () => {
      await mongoose.connect(process.env.MONGO_URI);
    });

    beforeEach( async () => {await User.deleteMany()});
  
    afterEach(async () => {
      await mongoose.connection.close();
    });
  
    test('should delete user information for an authenticated user', async () => {
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
  
      // Send a DELETE request to the /user route with the token
      const deleteResponse = await request(app)
        .delete('/api/users/user')
        .set('Authorization', `Bearer ${token}`)
        .expect(200); // Expecting a 200 OK status
  
      // Assertions on the response body
      expect(deleteResponse.body.status).toBe('User deleted');
      expect(deleteResponse.body.id).toBe(newUser._id.toString());
    });
  });