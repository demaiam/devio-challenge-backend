import { prisma } from '@/config';
import { faker } from '@faker-js/faker';
import { OrderStatus } from '@prisma/client';

export function generateOrderData() {
  const order = {
    customer: faker.person.firstName(),
    total: faker.number.int({ max: 50000 }),
    observation: faker.lorem.paragraph(),
    status: OrderStatus.PENDING,
    product: [
      {
        name: faker.commerce.productName(),
        price: faker.number.int({ max: 10000 }),
        quantity: faker.number.int({ max: 10 }),
        imageUrl: faker.internet.avatar(),
        additionals: [
          faker.commerce.productName(),
          faker.commerce.productName()
        ]
      }
    ]
  };

  return order;
}

export async function createOrder() {
  const pendingOrder = await prisma.order.create({
    data: {
      customer: faker.person.firstName(),
      total: faker.number.int({ max: 50000 }),
      observation: faker.lorem.paragraph(),
      status: OrderStatus.PENDING
    }
  });

  await prisma.orderProduct.create({
    data: {
      name: faker.commerce.productName(),
      price: faker.number.int({ max: 10000 }),
      quantity: faker.number.int({ max: 10 }),
      orderId: pendingOrder.id,
      imageUrl: faker.internet.avatar(),
      additionals: [
        faker.commerce.productName()
      ],
    }
  });

  const finishedOrder = await prisma.order.create({
    data: {
      customer: faker.person.firstName(),
      total: faker.number.int({ max: 50000 }),
      observation: faker.lorem.paragraph(),
      status: OrderStatus.FINISHED
    }
  });

  await prisma.orderProduct.create({
    data: {
      name: faker.commerce.productName(),
      price: faker.number.int({ max: 10000 }),
      quantity: faker.number.int({ max: 10 }),
      orderId: finishedOrder.id,
      imageUrl: faker.internet.avatar(),
      additionals: [
        faker.commerce.productName()
      ],
    }
  });
}