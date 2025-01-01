import React from "react";
import wallpaper from "../assets/bg3.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        {/* Header Section */}
        <header className="bg-black py-4">
          <div className="flex items-center justify-between px-2 max-w-7xl mx-auto">
            {/* Logo/Title */}
            <h1 className="text-2xl font-bold">Welcome to Bhat's Garage</h1>

            {/* Login/SignUp Links */}
            <div className="flex gap-4">
              <Link
                to="/login"
                className="bg-green-500 font-bold text-xl text-white px-4 py-1 rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </header>
        <div className="text-white text-center text-2xl tracking-widest">
          <img className="h-[70vh] w-full" src={wallpaper} alt="" />
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center mt-20 px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Track Your Vehicle Maintenance Seamlessly
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            Welcome to Bhat's Garage, where you can manage your vehicles, keep
            track of their maintenance schedules, and ensure they are always in
            top condition.
          </p>
          <Link
            to="/login"
            className="bg-indigo-500 text-white px-8 py-3 rounded-xl text-lg shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300"
          >
            Login
          </Link>
        </main>

        {/* Features Section */}
        <section className="mt-20 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Add Vehicles</h3>
              <p className="text-gray-300">
                Add and manage details of all your vehicles in one place,
                ensuring easy tracking and access.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Maintenance Records</h3>
              <p className="text-gray-300">
                Keep detailed records of maintenance activities to stay on top
                of service schedules.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Reminders</h3>
              <p className="text-gray-300">
                Set reminders for upcoming services or inspections to ensure
                your vehicle stays in great shape.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 py-6 bg-black">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bhat's Garage. All rights
            reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
