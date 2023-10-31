import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection established");
  } catch (err) {
    throw err;
  }
};

export default connectToDB;
