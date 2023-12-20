import { OrderType } from '@/protocols';
import { orderRepository } from '@/repositories';

async function placeOrder(order: OrderType) {
  const newOrder = await orderRepository.placeOrder(order.customer, order.total, order.observation);

  await orderRepository.createOrderProduct(order.product[0], newOrder.id);

  return;
}

async function findOrders() {
  const pendingOrders = await orderRepository.findPendingOrders();

  const finishedOrders = await orderRepository.findFinishedOrders();

  const orders = {
    pending: pendingOrders,
    finished: finishedOrders 
  };

  return orders;
}

export const orderService = {
  placeOrder,
  findOrders
};