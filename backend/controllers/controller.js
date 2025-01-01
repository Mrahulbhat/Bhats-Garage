const { User, Vehicle } = require("../models/model.js");

const addVehicle = async (req, res) => {
  try {
    const {
      vehicle_name,
      owner_name,
      category,
      reg_no,
      model,
      purchase_date,
      brand,
      image,
    } = req.body;

    const newVehicle = new Vehicle({
      vehicle_name,
      owner_name,
      category,
      reg_no,
      model,
      purchase_date,
      brand,
      image,
    });
    await newVehicle.save();
    res.status(201).json({ message: "New vehicle created", data: newVehicle });
  } catch (error) {
    console.error("Error in adding new vehicle: " + error);

    // Handle duplicate key error (e.g., unique violation)
    if (error.code === 11000) {
      res
        .status(400)
        .json({ error: "Duplicate key error: Reg_no already exists" });
    } else {
      res.status(500).json({ error: "Failed to create Vehicle" });
    }
  }
};

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({ message: "All user details", data: vehicles });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const matched_User = await User.findOne({ email });
    if (!matched_User) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (matched_User.password == password) {
      return res.status(200).json({ success: true, message: "User found" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Wrong Password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, message: "Login failed" });
  }
};

module.exports = { addVehicle, getAllVehicles, login };
