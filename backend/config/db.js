import mongoose from "mongoose";;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.mesage}`);
        process.exit(1); // 1 means fails and 0 means pass
    }
};