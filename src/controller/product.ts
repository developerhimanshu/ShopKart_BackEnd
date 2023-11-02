import { Request, Response } from "express";
import Product from "../models/product";
import { IProduct } from "../types";
type CreateProductRequestType = Pick<
  IProduct,
  "image" | "name" | "description" | "price"
>;

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { image, name, description, price }: CreateProductRequestType =
      req.body;

    const product = await Product.create({
      image,
      name,
      price,
      description,
    });
    res.send(product);
  } catch (error) {
    console.log("error is CreateProduct", error);
    res.send({
      message: "Something went wrong while creating product",
    });
    throw error;
  }
};
