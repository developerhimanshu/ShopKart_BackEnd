import mongoose, { Schema } from "mongoose";
// import { Schema } from "mongoose";
import { IProduct } from "../types";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["male", "female", "kids"],
      required: true,
      message: "Type must be one of 'male', 'female', or 'kids'",
    },
    brand:{
      type:String,
      required:true,
    },
    image: [{
      type: String,
      required: true,
    }],
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
