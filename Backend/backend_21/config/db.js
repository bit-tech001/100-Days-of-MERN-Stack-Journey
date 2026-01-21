import mongoose from "mongoose";


const connectDBn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected");
  } catch (error) {
    console.error("Mongo error:", error.message);
  }
};



export default connectDBn