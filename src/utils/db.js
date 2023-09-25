import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection established!");
  } catch (error) {
    throw new Error("Database connection error: " + error);
  }
};

export default connectDB;
