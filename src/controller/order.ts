import { Request, Response } from "express";
import { IOrder, IOrderItem } from "../types";
import Order from "../models/order";
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
type CreateOrderType = Pick<
  IOrder,
  "deliveryAddress" | "totalPrice" | "user" | "orderItem"
>;

const BASE_UNIT = 100;

const getTotalAmount = (orderItem: IOrderItem[]) => {
  return (
    orderItem.reduce((acc, item) => acc + item.price * item.quantity, 0) *
    BASE_UNIT
  );
};
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { deliveryAddress, user, orderItem }: CreateOrderType = req.body;

    const totalAmount = getTotalAmount(orderItem);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: "inr",
    });

    const order = await Order.create({
      user,
      deliveryAddress,
      orderItem,
      paymentIntentId: paymentIntent.id,
      paymentStatus: "pending",
      paymentDetails: {},
    });
    res.send({
      order,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("error in createOrder", error);
    res.send({
      message: "Something went wrong in createOrder",
    });
    throw error;
  }
};
