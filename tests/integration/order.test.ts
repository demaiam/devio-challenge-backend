import httpStatus from 'http-status';
import supertest from 'supertest';

import { cleanDb } from '../helpers';
//import { createProduct } from '../factories/products-factory';
import app, { init } from '@/app';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('GET /products', () => {
  it('', async () => {
    
  });
})