/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../server/index.js');

const request = supertest(app);

const id = '5e34acea2c7aaf680dce7675';

describe('Test Endpoints', () => {
  test('should get 1 trip from database', async (done) => {
    const res = await request
      .get(`/api/calendar/${id}`);

    expect(res.statusCode).toEqual(200);
    done();
  });

  test('should post 1 user to database', async (done) => {
    const res = await request
      .post('/api/quote')
      .send({
        firstName: 'Andy',
        lastName: 'Kuo',
        email: 'test@gmail.com',
        phone: '235-587-2283',
        comment: 'this is a test comment',
        hasAgent: false,
        isAgent: false,
        loyalty: true,
        subscribe: true,
      });

    expect(res.statusCode).toEqual(201);
    done();
  });
});
