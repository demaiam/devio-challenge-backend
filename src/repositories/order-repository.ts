import { prisma } from '@/config';
import { OrderProduct } from '@/protocols';
import { OrderStatus } from '@prisma/client';

async function placeOrder(customer: string, total: number, observation: string) {
  return prisma.order.create({
    data: {
      customer: customer,
      total: total,
      observation: observation,
      status: OrderStatus.PENDING
    }
  });
};

async function createOrderProduct(product: OrderProduct, orderId: number) {
  return prisma.orderProduct.create({
    data: {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      imageUrl: product.imageUrl,
      orderId: orderId
    }
  });
}

async function findPendingOrders() {
  return prisma.order.findMany({
    where: {
      status: OrderStatus.PENDING
    },
    include: {
      product: true
    }
  });
}

async function findFinishedOrders() {
  return prisma.order.findMany({
    where: {
      status: OrderStatus.FINISHED
    },
    include: {
      product: true
    }
  })
}

export const orderRepository = {
  placeOrder,
  createOrderProduct,
  findPendingOrders,
  findFinishedOrders
};