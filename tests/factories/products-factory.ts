import { prisma } from '@/config';
import { faker } from '@faker-js/faker';

export async function createProduct() {
  const product = await prisma.product.create({
    data: {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: faker.commerce.productMaterial(),
      price: faker.number.int({ max: 10000 }),
      imageUrl: faker.internet.avatar()
    }
  });

  await prisma.additional.create({
    data: {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.number.int({ max: 10000 }),
      productId: product.id,
      imageUrl: faker.internet.avatar()
    }
  });

  await prisma.additional.create({
    data: {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.number.int({ max: 10000 }),
      productId: product.id,
      imageUrl: faker.internet.avatar()
    }
  });

  return product.category;
}