import { prisma } from '@/config';

async function findProducts() {
  return prisma.product.findMany({
    include: {
      additionals: true
    }
  });
}

async function findProductsByCategory(category: string) {
  return prisma.product.findMany({
    where: {
      category: category
    },
    include: {
      additionals: true
    }
  });
}

export const productsRepository = {
  findProducts,
  findProductsByCategory
};