import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI as string);
    console.log('DB is ok');

  } catch (err) {
    console.error(err);
  }
}

export default connectMongoDB;