import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default dbConnect;
