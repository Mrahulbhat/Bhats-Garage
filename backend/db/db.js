const mongoose = require('mongoose');

// Database Connection
const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("Failed to connect to MongoDB: " + error);
    process.exit(1); // Exit the process if connection fails
  }
}

module.exports = connectDB;