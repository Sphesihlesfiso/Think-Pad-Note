import mongoose from "mongoose";
export const connectDb = async () => {
  try {
    await mongoose.connect(
      process.env.DB_STRING
    );
    console.log("Db connected");
    
  } catch (error) {
    console.error(error);
    process.exit('1')
  }
};
