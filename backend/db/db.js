const mongoose = require('mongoose');

// Database Connection
const MONGO_URI =
  "mongodb+srv://rahulbhat5122:Rbhat123@cluster0.cxbif.mongodb.net/bhats_garage?retryWrites=true&w=majority&appName=Cluster0";

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