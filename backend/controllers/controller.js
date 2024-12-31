const User = require("../models/user_model.js");

const createUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const newUser = new User({ name, email, phone, password });
    await newUser.save();
    res.status(201).json({ message: "New user created", data: newUser });
  } catch (error) {
    console.error("Error in adding new user: " + error);

    // Handle duplicate key error (e.g., unique email/phone violation)
    if (error.code === 11000) {
      res
        .status(400)
        .json({ error: "Duplicate key error: Email or phone already exists" });
    } else {
      res.status(500).json({ error: "Failed to create user" });
    }
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "All user details", data: users });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
    try{
        const {email,password} = req.body;
        const matched_User = await User.findOne({email});
        if(!matched_User){
            return res.status(404).json({success:false,message:"User not found"});
        }

        if(matched_User.password==password){
            return res.status(200).json({success:true,message:"User found"});
        }
        else{
            return res.status(401).json({success:false,message:"Wrong Password"});
        }
    }
    catch(error){
        console.error(error);
        return res.status(400).json({success:false,message:"Login failed"});
    }
};

module.exports = { createUser, getAllUsers, login };
