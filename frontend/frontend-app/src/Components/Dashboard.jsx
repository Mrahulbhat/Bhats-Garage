import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [vehicles, setVehicles] = useState([]);

  // Fetch vehicles from backend
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/vehicles");
        setVehicles(response.data.vehicles);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      {/* Header */}
      <header className="bg-black py-4">
        <div className="flex items-center justify-between px-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Link
            to="/"
            className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
          >
            Logout
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-10 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Your Vehicles</h2>
          <Link
            to="/add-vehicle"
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300"
          >
            Add New Vehicle
          </Link>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles > 0 ? (
            vehicles.map((vehicle) => (
              <div
                key={vehicle._id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-4">{vehicle.name}</h3>
                <p className="text-gray-300">Model: {vehicle.model}</p>
                <p className="text-gray-300">Year: {vehicle.year}</p>
                <p className="text-gray-300">
                  Last Serviced: {vehicle.lastServiced || "N/A"}
                </p>
                <Link
                  to={`/vehicle/${vehicle._id}`}
                  className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No vehicles added yet. Click "Add New Vehicle" to get started.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
