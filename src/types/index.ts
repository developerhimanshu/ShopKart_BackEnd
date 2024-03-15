export interface IProduct {
  _id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
  brand:string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  name: string;
  email: string;
}

export interface IOrderItem {
  name: string;
  quantity: number;
  image: string;
  price: number;
  product: string;
}

export interface IDeliveryAddress {
  address: string;
  city: string;
}

export interface IOrder {
  _id: string;
  user: IUser;
  orderItem: IOrderItem[];
  deliveryAddress: IDeliveryAddress;
  paymentDetails: {};
  paymentIntentId: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  paymentStatus: string;
}
