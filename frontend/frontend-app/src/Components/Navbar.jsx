import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-black text-white py-4 font-bold text-2xl">
      <div className="flex items-center text-center justify-center w-100 ml-14">
        {/* Center Heading */}
        <div className="flex-1 ">
          <h1>Welcome to Bhat's Garage</h1>
        </div>

        {/* Login/SignUp Link */}
        <div className=" text-xl flex gap-10">
          <Link to="/" className="text-white hover:underline mr-10">
            Home
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
