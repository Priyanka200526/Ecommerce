import { config } from "./config.js";
import mongoose from "mongoose";

const connectdb = async ()=> {
    await mongoose.connect(config.MONGO_URI)
    console.log("MongoDB connected");    
}
export default connectdb;
