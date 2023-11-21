import express from "express";
import {
  createProduct,
  getProductById,
  getProductByType,
  getProducts,
} from "../controller/product";
const productRoute = express.Router();

productRoute.post("/", createProduct);
productRoute.get("/", getProducts);
productRoute.get("/:id", getProductById);
productRoute.get("/type/:type", getProductByType);
export default productRoute;
