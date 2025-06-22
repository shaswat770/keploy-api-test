// tests/api.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: "test" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test('Should create a user', async () => {
  const res = await request(app)
    .post('/users')
    .send({ name: 'Shaswat', age: 22 });

  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe('Shaswat');
});
