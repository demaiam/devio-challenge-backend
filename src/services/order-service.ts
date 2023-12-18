import { Order } from '@/protocols';
import { orderRepository } from '@/repositories';

async function placeOrder(order: Order) {
  const newOrder =  await orderRepository.placeOrder(order.order.customer, order.order.total);

  return await orderRepository.createOrderProducts(order.order.products, newOrder.id);
}

async function findOrders() {
  const orders = await orderRepository.findOrders();

  return orders;
}

export const orderService = {
  placeOrder,
  findOrders
};