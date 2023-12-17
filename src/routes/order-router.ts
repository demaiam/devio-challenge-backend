import { Router } from 'express';
import { placeOrder, findOrders } from '@/controllers';

const orderRouter = Router();

orderRouter
  .post('/', placeOrder)
  .get('/', findOrders);

export { orderRouter };