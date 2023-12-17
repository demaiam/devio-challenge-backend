import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { orderService } from '@/services';
import { Order } from '@/protocols';

export async function placeOrder(req: Request, res: Response) {
  const { order } = req.body as Order;

  await orderService.findProducts(order);

  return res.status(httpStatus.CREATED);
}

export async function findOrders(req: Request, res: Response) {
  const orders = await orderService.findOrders();

  return res.status(httpStatus.OK).send(orders);
}
