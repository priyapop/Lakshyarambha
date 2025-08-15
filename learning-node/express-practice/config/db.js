import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const connectDB = async () => {
  console.log("MONGO_URI from env:", process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection failed", err);
  }
};

export default connectDB;