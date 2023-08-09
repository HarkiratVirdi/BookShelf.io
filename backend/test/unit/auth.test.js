const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/user');

describe('POST /login', () => {
  it('should return 200 and a token if login is successful', async () => {
    // Create a mock user for testing
    const mockUser = new User({
      email: 'test@example.com',
      firstName: 'testuser',
      lastName: 'testuser',
      password: 'testpassword',
    });
    await mockUser.save();

    // Send a POST request to the login route
    const response = await request(app).post('/api/users/login').send({
      email: 'test@example.com',
      password: 'testpassword',
    });

    // Assert the response
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('firstName');
    expect(response.body).toHaveProperty('lastName');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('token');
  }, 10000);

  it('should return 401 if login is unsuccessful', async () => {
    // Send a POST request to the login route with invalid credentials
    const response = await request(app).post('/api/users/login').send({
      email: 'invalid@example.com',
      password: 'invalidpassword',
    });

    // Assert the response
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Invalid email or password');
  });
});
