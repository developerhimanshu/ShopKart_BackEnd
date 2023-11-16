import { Request, Response } from "express";
import Stripe from "stripe";
import Order from "../models/order";
const stripeClient = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const webhookHandler = async (request: Request, response: Response) => {
  try {
    const sig = request.headers["stripe-signature"] as string;
    const event = stripeClient.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "charge.succeeded") {
      const charge = event.data.object as Stripe.Charge;
      const order = await Order.findOne({
        paymentIntentId: charge.payment_intent,
      });
      if (order) {
        order.paymentStatus = "paid";
        order.paymentDetails = charge;
        await order.save();
      }
    }
    response.send({ recieved: true }).end();
  } catch (error) {
    console.log("error in webhook handler", error);
    throw error;
  }
};
