import { Request, Response } from "express";
import { IOrder } from "../types";
import Order from "../models/order";

type CreateOrderType = Pick<
  IOrder,
  "deliveryAddress" | "totalPrice" | "user" | "orderItem"
>;
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { deliveryAddress, totalPrice, user, orderItem }: CreateOrderType =
      req.body;
    const order = await Order.create({
      user,
      deliveryAddress,
      orderItem,
      totalPrice,
    });
  } catch (error) {
    console.log("error in createOrder", error);
    throw error;
  }
};
