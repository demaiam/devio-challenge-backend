import { productsRepository } from '@/repositories';

async function findProducts() {
  const products = await productsRepository.findProducts();

  return products;
}

async function findProductsByCategory(category: string) {
  const products = await productsRepository.findProductsByCategory(category);

  return products;
}

export const productsService = {
  findProducts,
  findProductsByCategory
};