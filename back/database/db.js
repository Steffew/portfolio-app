const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Attempting to connect to MongoDB...");
  try {
    await mongoose.connect(
      "mongodb://admin:adminpassword@localhost:27017/projects"
    );
    console.log("MongoDB connected successfully!");
  } catch (error) {
    if (error.message.includes("Authentication failed")) {
      console.error(
        "Authentication failed: Check if the 'projects' database exists and the credentials are correct."
      );
    } else {
      console.error("Error connecting to MongoDB:", error.message);
    }
    process.exit(1);
  }
};

module.exports = connectDB;
