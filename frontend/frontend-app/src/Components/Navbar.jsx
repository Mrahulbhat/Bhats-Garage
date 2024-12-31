import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-black text-white py-4 font-bold text-2xl">
      <div className="flex items-center justify-between w-full px-6">
        {/* Center Heading */}
        <div className="flex-1 ">
          <h1>Bhat's Garage</h1>
        </div>

        {/* Login/SignUp Link */}
        <div className=" text-xl flex gap-10">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login/SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
