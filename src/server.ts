import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./db";
import productRoute from "./routes/product";
dotenv.config();

const app = express();
app.use(express.json());
connectToDB();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/products", productRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Up and running at port" + PORT);
});