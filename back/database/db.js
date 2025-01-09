const mongoose = require("mongoose");

const connectDB = async () => {
    const MONGO_DB = process.env.MONGO_DB;
    const MONGO_USER = process.env.MONGO_USER;
    const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
    const MONGO_AUTH_DB = process.env.MONGO_AUTH_DB || "admin";

    const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@mongo:27017/${MONGO_DB}?authSource=${MONGO_AUTH_DB}`;

    console.log("Attempting to connect to MongoDB...");
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
