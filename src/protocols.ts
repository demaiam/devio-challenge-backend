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

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};