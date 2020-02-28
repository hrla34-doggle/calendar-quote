/* eslint-disable no-undef */
// const supertest = require('supertest');
const app = require('../server');
const request = require('supertest');
const models = require('../database/models-pg.js');
// const models = require('../database/models.js');
const controllers = require('../server/controllers.js');


// const id = '5e34acea2c7aaf680dce7675';

describe('GET /', () => {
  test('It should respond with get request', async (done) => {
    const response = await request(app).get('/api/calendar/100');
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBe(100);
    // expect(response.body.id).toBe('100'); // testing with postgreSQL
    done();
  });
});

describe('POST /', () => {
  test('It should respond with post request', async (done) => {
    const trip = {
      id: 10000001, // id: '10000001' -> testing with postgreSQL
      code: 'ABCD',
      title: 'Beautiful wonders in Los Angeles',
      city: 'Los Angeles|United States',
      msrp: 2246.35,
      price: 1797.08,
      discounted: true,
      days: 12,
      dates: '2020-01-01T08:00:00.000Z',
      rating: 4.31,
      reviews: 58
    };
    const response = await request(app).post('/api/calendar/10000001', trip);
    expect(response.statusCode).toBe(201);
    done();
  });
});

describe('PUT /', () => {
  test('It should respond with put request', async (done) => {
    const trip = {
      code: 'EFGH',
      city: 'Las Vegas, United States',
    };
    const response = await request(app).put('/api/calendar/10000001', trip);
    expect(response.statusCode).toBe(202);
    done();
  });
});

describe('DELETE /', () => {
  test('It should respond with delete request', async (done) => {
    const response = await request(app).delete('/api/calendar/10000001');
    expect(response.statusCode).toBe(203);
    done();
  });
});

describe('QUERY FIND ONE', () => {
  test('It should retrieve one record within 50ms', async (done) => {
    const start = Date.now();
    const response = await request(app).get('/api/calendar/10000000');
    expect(response.statusCode).toBe(200);
    console.log(`*************** got in ${Date.now() - start} ms ***************`);
    expect(Date.now() - start).toBeLessThan(50);
  
    // testing with postgreSQL:
    // models.get('9999988').then(() => console.log(`*************** got in ${Date.now() - start} ms ***************`));
    // console.log(`*************** got in ${Date.now() - start} ms ***************`);
    done();
  });
});

describe('QUERY POST ONE', () => {
  test('It should post one new record within 50ms', async (done) => {
    const start = Date.now();
    const trip = {
      id: 10000001, // id: '10000001' -> testing with postgreSQL
      code: 'ABCD',
      title: 'Beautiful wonders in Los Angeles',
      city: 'Los Angeles, United States',
      msrp: 2246.35,
      price: 1797.08,
      discounted: true,
      days: 12,
      dates: '2020-01-01T08:00:00.000Z',
      rating: 4.31,
      reviews: 58
    };
    const response = await request(app).post('/api/calendar/10000001', trip);
    expect(response.statusCode).toBe(201);
    console.log(`*************** got in ${Date.now() - start} ms ***************`);
    expect(Date.now() - start).toBeLessThan(50);
    // models.post(trip).then(() => {
    //   console.log(`*************** posted in ${Date.now() - start} ms ***************`);
    //   expect(Date.now() - start).toBeLessThan(50);
    // });
    done();
  });
});

describe('QUERY UPDATE ONE', () => {
  test('It should post one new record within 50ms', async (done) => {
    const start = Date.now();
    const trip = {
      code: 'EFGH',
      city: 'Las Vegas, United States'
    };
    const response = await request(app).put('/api/calendar/10000001', trip);
    expect(response.statusCode).toBe(202);
    console.log(`*************** updated in ${Date.now() - start} ms ***************`);
    expect(Date.now() - start).toBeLessThan(50);
    // testing with postgreSQL:
    // models.put('10000001', trip).then(() => {
    //   console.log(`*************** updated in ${Date.now() - start} ms ***************`);
    //   expect(Date.now() - start).toBeLessThan(50);
    // });
    done();
  });
});

describe('QUERY DELETE ONE', () => {
  test('It should delete one new record within 50ms', async (done) => {
    const start = Date.now();
    const response = await request(app).delete('/api/calendar/10000001');
    expect(response.statusCode).toBe(203);
    console.log(`*************** deleted in ${Date.now() - start} ms ***************`);
    expect(Date.now() - start).toBeLessThan(50);
    // testing with postgreSQL:
    // models.delete('10000001').then(() => {
    //   console.log(`*************** deleted in ${Date.now() - start} ms ***************`);
    //   expect(Date.now() - start).toBeLessThan(50);
    // });
    done();
  });
});