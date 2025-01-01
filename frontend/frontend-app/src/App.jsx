import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import AddVehicle from "./Components/AddVehicle";

const App = () => {
  return (
    <div className="bg-gray-800 h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-vehicle" element={<AddVehicle/>}/>
      </Routes>
    </div>
  );
};

export default App;
