import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
} from "../controller/product";
const productRoute = express.Router();

productRoute.post("/", createProduct);
productRoute.get("/", getProducts);
productRoute.get("/:id", getProductById);

export default productRoute;
