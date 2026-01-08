import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURL = process.env.MONGODB_URL  as string;

if (!mongoURL) {
     throw new Error("MONGODB_URL is not defined in environment variables");
     console.error("MONGODB_URL is not defined in environment variables");
}

export const connectDb = async () => {
    try {
        await mongoose.connect(mongoURL, {
            serverSelectionTimeoutMS: 5000,
            bufferCommands: false,
        })

        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}