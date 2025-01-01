import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const ValidateForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        setEmail("");
        setPassword("");
        setError("");
        navigate("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-green-500 to-blue-500">
      <Navbar />
      <div className="flex flex-col items-center py-24 ">
        <div className="w-full max-w-md p-8 bg-gray-900 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            Login
          </h1>
          <form onSubmit={ValidateForm} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 text-white font-semibold rounded-lg ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              } transition duration-300`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && (
              <div className="text-red-500 text-center mt-2 text-sm">
                {error}
              </div>
            )}
            <div className="text-center text-sm mt-4 text-gray-600">
              Not a user?  <span className="text-white"> Contact Admin </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
