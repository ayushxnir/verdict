import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.CONN_STRING).then(() => {
    console.log("✅ Database Connected...");
  });
};

export default connectDB;
