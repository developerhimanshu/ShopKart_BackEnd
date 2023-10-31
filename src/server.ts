import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./db";
dotenv.config();

const app = express();
connectToDB();

app.get("/ping", (req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Up and running at port" + PORT);
});
