import 'express-async-errors';
import express, { json, Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { handleApplicationErrors } from '@/middlewares';
import { orderRouter, productsRouter } from '@/routers';
import { connectDb, disconnectDB } from '@/config';

dotenv.config();

const app = express();
app.use(json());

app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/products', productsRouter)
  .use('/order', orderRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;