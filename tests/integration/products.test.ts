import httpStatus from 'http-status';
import supertest from 'supertest';

import { cleanDb } from '../helpers';
import { createProduct } from '../factories/products-factory';
import app, { init } from '@/app';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('GET /products', () => {
  it('should respond with status 200 and return an array with all products', async () => {
    await createProduct();

    const response = await server.get('/products');

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual([
      expect.objectContaining({
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        category: expect.any(String),
        price: expect.any(Number),
        imageUrl: expect.any(String),
        additionals: [
          expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
            productId: expect.any(Number),
            imageUrl: expect.any(String)
          }),
          expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
            productId: expect.any(Number),
            imageUrl: expect.any(String)
          })
        ]
      })
    ]);
  });
});

describe('GET /products/:category', () => {
  it('should respond with status 200 and return an array with all products of given category', async () => {
    const category = await createProduct();

    const response = await server.get(`/products/${category}`);

    expect(response.status).toBe(httpStatus.OK);
    expect(response.body).toEqual([
      expect.objectContaining({
        id: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        category: expect.any(String),
        price: expect.any(Number),
        imageUrl: expect.any(String),
        additionals: [
          expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
            productId: expect.any(Number),
            imageUrl: expect.any(String)
          }),
          expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            price: expect.any(Number),
            productId: expect.any(Number),
            imageUrl: expect.any(String)
          })
        ]
      })
    ]);
  });
});