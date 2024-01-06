
import mongoose from 'mongoose'

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected...");
  } catch (err) {
    console.log(" there is an error connecting to db")
    console.error(err.message);
    process.exit(1);
  }
};