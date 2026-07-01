import mongoose from "mongoose";
import "dotenv/config";

export const connection_db = async () => {
  try {
    const password = encodeURIComponent(process.env.PASSWORD_MONGO);

    await mongoose.connect(
      `mongodb+srv://${process.env.USER_MONGO}:${password}@cluster0.c9zh2yj.mongodb.net/${process.env.MONGO_DB}?appName=Cluster0`,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
