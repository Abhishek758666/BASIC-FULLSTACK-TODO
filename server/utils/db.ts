import mongoose from "mongoose";
const uri = process.env.MONGO_URI;

export const DBconnect = async () => {
  try {
    uri && (await mongoose.connect(uri));
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
