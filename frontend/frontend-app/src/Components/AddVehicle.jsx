import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const AddVehicle = () => {
  const [vehicleName, setVehicleName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [category, setCategory] = useState("");
  const [regNo, setRegNo] = useState("");
  const [model, setModel] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/api/add-vehicle", {
        vehicle_name: vehicleName,
        owner_name: ownerName,
        category,
        reg_no: regNo,
        model,
        purchase_date: purchaseDate,
        brand,
        image,
      });

      if (response.data.success) {
        alert("Vehicle added successfully!");
        // Clear form inputs
        setVehicleName("");
        setOwnerName("");
        setCategory("");
        setRegNo("");
        setModel("");
        setPurchaseDate("");
        setBrand("");
        setImage("");

        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to add vehicle. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-fit bg-gradient-to-br from-gray-900 to-gray-700">
      <Navbar />
      <div className="flex justify-center items-center py-12">
        <div className="w-full max-w-lg bg-green-400 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Add Vehicle
          </h1>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="vehicleName" className="block text-sm font-medium text-gray-700">
                Vehicle Name
              </label>
              <input
                id="vehicleName"
                type="text"
                value={vehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
                placeholder="Enter vehicle name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                Owner Name
              </label>
              <input
                id="ownerName"
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                placeholder="Enter owner name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Category</option>
                <option value="Car">Car</option>
                <option value="Bike">Bike</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
            <div>
              <label htmlFor="regNo" className="block text-sm font-medium text-gray-700">
                Registration Number
              </label>
              <input
                id="regNo"
                type="text"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="Enter registration number"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                Model
              </label>
              <input
                id="model"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter vehicle model"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">
                Purchase Date
              </label>
              <input
                id="purchaseDate"
                type="date"
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                Brand
              </label>
              <input
                id="brand"
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Enter brand"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <input
                id="image"
                type="text"
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter Image URL"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {error && <div className="text-red-500 text-center text-sm">{error}</div>}
            <button
              type="submit"
              className={`w-full py-2 text-white font-semibold rounded-lg ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              } transition duration-300`}
              disabled={loading}
            >
              {loading ? "Adding Vehicle..." : "Add Vehicle"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
