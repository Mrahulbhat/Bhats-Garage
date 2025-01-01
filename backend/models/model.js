const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
});

const vehicleSchema = mongoose.Schema({
  vehicle_name: { type: String, required: true },
  owner_name: { type: String, required: true },
  category: { type: String, required: true },
  reg_no:{type:String,required:true,unique:true},
  model: { type: String, required: true },
  purchase_date: { type: Date, required: true},
  brand: { type: String, required: true},
  image:{type:String,required:true}
});

const User = mongoose.model("User", userSchema);

const Vehicle = mongoose.model('Vehicle',vehicleSchema);

module.exports = {User,Vehicle};
