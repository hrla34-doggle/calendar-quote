/* eslint-disable no-undef */
// const supertest = require('supertest');
const app = require('../server/index.js');

const request = require('supertest');

// const id = '5e34acea2c7aaf680dce7675';
test('It adds two numbers', () => {
  expect(1 + 1).toBe(2);
});

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('GET /', () => {
  test('It should respond with get request', async () => {
    const response = await request(app).get('/api/calendar/100');
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe('100');
  });
});

// describe('Get Endpoints', () => {
//   it('should get a trip', async () => {
//     const res = await request(app)
//       .get('/api/calendar/100')
//     expect(res.statusCode).toEqual(200)
//   })
// })

// describe('Test Endpoints', () => {
//   test('should get 1 trip from database', async (done) => {
//     const res = await request
//       .get(`/api/calendar/${id}`);

//     expect(res.statusCode).toEqual(200);
//     done();
//   });

//   test('should post 1 user to database', async (done) => {
//     const res = await request
//       .post('/api/quote')
//       .send({
//         firstName: 'Andy',
//         lastName: 'Kuo',
//         email: 'test@gmail.com',
//         phone: '235-587-2283',
//         comment: 'this is a test comment',
//         hasAgent: false,
//         isAgent: false,
//         loyalty: true,
//         subscribe: true,
//       });

//     expect(res.statusCode).toEqual(201);
//     done();
//   });
// });
