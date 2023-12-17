import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { productsService } from '@/services';

export async function findProducts(req: Request, res: Response) {
  const products = await productsService.findProducts();

  return res.status(httpStatus.OK).send(products);
}

export async function findProductsByCategory(req: Request, res: Response) {
  const category = req.params.category as string;

  const products = await productsService.findProductsByCategory(category);

  return res.status(httpStatus.OK).send(products);
}