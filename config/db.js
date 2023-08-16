import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected")
  } catch (err) {
    console.log("err", err);
  }
};


export default connectDb;