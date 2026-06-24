import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is Missing");
}

export async function connectDb(): Promise<void> {
  try {
    console.log("MONGODB_URI:", MONGODB_URI);
    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}
