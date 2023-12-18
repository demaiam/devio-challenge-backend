import { prisma } from '@/config';
import { faker } from '@faker-js/faker';

export function generateOrderData() {
  const order = {
    customer: faker.person.firstName(),
    total: faker.number.int({ max: 50000 }),
    products: [
      {
        name: faker.commerce.productName(),
        price: faker.number.int({ max: 10000 }),
        quantity: faker.number.int({ max: 10 }),
        imageUrl: faker.internet.avatar()
      },
      {
        name: faker.commerce.productName(),
        price: faker.number.int({ max: 10000 }),
        quantity: faker.number.int({ max: 10 }),
        imageUrl: faker.internet.avatar()
      }
    ]
  };

  return order;
}

export async function createOrder() {
  const order = await prisma.order.create({
    data: {
      customer: faker.person.firstName(),
      total: faker.number.int({ max: 50000 }),
    }
  });

  await prisma.orderProducts.create({
    data: {
      name: faker.commerce.productName(),
      price: faker.number.int({ max: 10000 }),
      quantity: faker.number.int({ max: 10 }),
      orderId: order.id,
      imageUrl: faker.internet.avatar()
    }
  });

  await prisma.orderProducts.create({
    data: {
      name: faker.commerce.productName(),
      price: faker.number.int({ max: 10000 }),
      quantity: faker.number.int({ max: 10 }),
      orderId: order.id,
      imageUrl: faker.internet.avatar()
    }
  });
}