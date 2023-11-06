import express from "express";
import { createProduct } from "../controller/product";

const orderRoute = express.Router();

orderRoute.post("/", createProduct);
