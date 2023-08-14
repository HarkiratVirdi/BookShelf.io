const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const User = require('../../src/models/user');
const Address = require('../../src/models/address');

describe('Address-related API', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  beforeEach( async () => {await User.deleteMany()});

  afterEach(async () => {
    await mongoose.connection.close();
  });

  test('should add a new address for an authenticated user', async () => {
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

    // Create a mock address data
    const addressData = {
      addressLine1: '123 Main St',
      addressLine2: 'Unit 1',
      city: 'Cityville',
      province: 'Province',
      postalCode: '12345',
      country: 'Country',
    };

    // Send a POST request to the /address route with the token and address data
    const response = await request(app)
      .post('/api/users/user/address')
      .set('Authorization', `Bearer ${token}`)
      .send(addressData)
      .expect(202); // Expecting a 202 Accepted status

    // Assertions on the response body
    expect(response.body.message).toBe('Address is successfully saved');
  });

  test('should get user address for an authenticated user', async () => {
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

    // Create a mock address and associate it with the user
    const addressData = {
      addressLine1: '123 Main St',
      addressLine2: 'Unit 1',
      city: 'Cityville',
      province: 'Province',
      postalCode: '12345',
      country: 'Country',
    };
    const newAddress = await Address.create(addressData);
    newUser.addressId = newAddress._id;
    await newUser.save();

    // Send a GET request to the /address route with the token
    const response = await request(app)
      .get('/api/users/user/address')
      .set('Authorization', `Bearer ${token}`)
      .expect(200); // Expecting a 200 OK status

    // Assertions on the response body
    expect(response.body.status).toBe('Found address');
    expect(response.body.address).toEqual(expect.objectContaining(addressData));
  });

  test('should update user address for an authenticated user', async () => {
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

    // Create a mock address and associate it with the user
    const addressData = {
      addressLine1: '123 Main St',
      city: 'Cityville',
      province: 'Province',
      postalCode: '12345',
      country: 'Country',
    };
    const newAddress = await Address.create(addressData);
    newUser.addressId = newAddress._id;
    await newUser.save();

    // Updated address data
    const updatedAddressData = {
      addressLine1: '456 New St',
      city: 'NewCity',
      province: 'NewProvince',
      postalCode: '67890',
      country: 'NewCountry',
    };

    // Send a PUT request to the /address route with the token and updated address data
    const response = await request(app)
      .put('/api/users/user/address')
      .set('Authorization', `Bearer ${token}`)
      .send(updatedAddressData)
      .expect(200); // Expecting a 200 OK status

    // Assertions on the response body
    expect(response.body.status).toBe('Updated address');
    expect(response.body.id).toBe(newUser.addressId.toString());
  });

  test('should delete user address for an authenticated user', async () => {
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

    // Create a mock address and associate it with the user
    const addressData = {
      addressLine1: '123 Main St',
      city: 'Cityville',
      province: 'Province',
      postalCode: '12345',
      country: 'Country',
    };
    const newAddress = await Address.create(addressData);
    newUser.addressId = newAddress._id;
    await newUser.save();

    // Send a DELETE request to the /address route with the token
    const response = await request(app)
      .delete('/api/users/user/address')
      .set('Authorization', `Bearer ${token}`)
      .expect(200); // Expecting a 200 OK status

    // Assertions on the response body
    expect(response.body.status).toBe('Address deleted');
    expect(response.body.address).toBe(newUser.addressId.toString());
  });
});
