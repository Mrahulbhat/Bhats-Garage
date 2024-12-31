import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const ValidateForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/api/login", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        alert("Login successful!");
        setEmail(""); // Clear the email input on successful login
        setPassword(""); // Clear the password input on successful login
        setError(""); // Clear any previous errors

        // Redirect to a new page after successful login
        navigate("/dashboard"); // You can change the route as needed
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
    <div>
      <div className="text-center mt-20 text-white font-bold tracking-widest">
        <h1 className="text-2xl">Login</h1>
        <div className="border-white border-2 rounded-xl py-10 px-10 w-[600px] mt-10 ml-[28vw]">
          <form onSubmit={ValidateForm}>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              required
              className="border-2 rounded-lg px-4 py-2 mt-2 text-black"
            />
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              required
              className="border-2 rounded-lg px-4 py-2 mt-2 text-black"
            />
            <br />
            <br />
            <button
              type="submit"
              className="bg-green-600 px-8 py-2 rounded-2xl hover:bg-green-700 transition duration-300"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && <div className="text-red-500 mt-4 text-sm">{error}</div>}
            <div>
              <p className="text-sm mt-8">
                Not a User?{" "}
                <Link to="/signUp">
                  <span className="underline">Create Account</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
