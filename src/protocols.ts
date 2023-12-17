export type Order = {
  order: OrderType
};

export type OrderType = {
  customer: string,
  total: number,
  products: OrderProducts[]
};

export type OrderProducts = {
  name: string,
  price: number,
  quantity: number,
  imageUrl: string
};