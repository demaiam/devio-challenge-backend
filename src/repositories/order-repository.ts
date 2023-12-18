import { prisma } from '@/config';
import { OrderProducts } from '@/protocols';

async function placeOrder(customer: string, total: number) {
  return prisma.order.create({
    data: {
      customer: customer,
      total: total
    }
  });
};

async function createOrderProducts(products: OrderProducts[], orderId: number) {
  products.map((product) => {
    prisma.orderProducts.create({
      data: {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        imageUrl: product.imageUrl,
        orderId: orderId
      }
    })
  });
  return;
}

async function findOrders() {
  return prisma.order.findMany({
    include: {
      products: true
    }
  });
}

export const orderRepository = {
  placeOrder,
  createOrderProducts,
  findOrders
};