import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { orderService } from '@/services';

type OrderType = {
  customer: string,
  total: number,
  products: OrderProducts[]
};

type OrderProducts = {
  name: string,
  price: number,
  quantity: number,
  imageUrl: string
};

export async function placeOrder(req: Request, res: Response) {
  const order = req.body as OrderType;

  await orderService.placeOrder(order);

  return res.sendStatus(httpStatus.CREATED);
}

export async function findOrders(req: Request, res: Response) {
  const orders = await orderService.findOrders();

  return res.status(httpStatus.OK).send(orders);
}
