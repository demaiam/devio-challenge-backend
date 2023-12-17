import { Router } from 'express';
import { findProducts, findProductsByCategory } from '@/controllers';

const productsRouter = Router();

productsRouter
  .get('/', findProducts)
  .get('/:category', findProductsByCategory);

export { productsRouter };