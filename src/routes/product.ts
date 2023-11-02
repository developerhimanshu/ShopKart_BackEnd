import express from "express";
import { createProduct } from "../controller/product";
const productRoute = express.Router();

productRoute.post("/", createProduct);

export default productRoute;
