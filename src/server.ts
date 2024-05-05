import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db";
import productRoute from "./routes/product";
import orderRoute from "./routes/order";
import { webhookHandler } from "./webhook";
dotenv.config();
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
connectToDB();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  webhookHandler
);

app.use(express.json());
app.get("/", (req, res)=>{
  res.send("hello")
})
app.use("/products", productRoute);
app.use("/orders", orderRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Up and running at port" + PORT);
});
