import httpStatus from 'http-status';
import supertest from 'supertest';

import { cleanDb } from '../helpers';
import { createOrder, generateOrderData } from '../factories/order-factory';

import app, { init } from '@/app';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('POST /order', () => {
  it('should respond with status 201 and place an order', async () => {
    const body = generateOrderData();

    const response = await server.post('/order').send(body);

    expect(response.status).toBe(httpStatus.CREATED);
  });
});

describe('GET /order', () => {
  it('should respond with status 200 and return an array with all orders', async () => {
    await createOrder();
    const response = await server.get('/order');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual(expect.objectContaining({
      finished: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          customer: expect.any(String),
          total: expect.any(Number),
          observation: expect.any(String),
          status: expect.any(String),
          product: [
            expect.objectContaining({
              id: expect.any(Number),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              name: expect.any(String),
              price: expect.any(Number),
              quantity: expect.any(Number),
              orderId: expect.any(Number),
              imageUrl: expect.any(String)
            })
          ]
        })
      ]),
      pending: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          customer: expect.any(String),
          total: expect.any(Number),
          observation: expect.any(String),
          status: expect.any(String),
          product: [
            expect.objectContaining({
              id: expect.any(Number),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              name: expect.any(String),
              price: expect.any(Number),
              quantity: expect.any(Number),
              orderId: expect.any(Number),
              imageUrl: expect.any(String)
            })
          ]
        })
      ])
    }));
  })
});