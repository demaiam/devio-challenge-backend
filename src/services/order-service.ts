import { OrderType } from '@/protocols';
import { orderRepository } from '@/repositories';

async function placeOrder(order: OrderType) {
  const newOrder = await orderRepository.placeOrder(order.customer, order.total);

  console.log(newOrder);

  await orderRepository.createOrderProducts(order.products, newOrder.id);

  return;
}

async function findOrders() {
  const orders = await orderRepository.findOrders();

  return orders;
}

export const orderService = {
  placeOrder,
  findOrders
};