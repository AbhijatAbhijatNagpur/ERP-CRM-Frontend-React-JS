import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const SuperAdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Replace with your API endpoint
    const apiUrl = "https://erp-crm-backend-nodejs.onrender.com/api/superAdmin/login";

    try {
      const response = await axios.post(apiUrl, { email, password });
      
      // Assuming you get a token or user data upon successful login
      localStorage.setItem("token", response.data.token); // or however you want to handle authentication
      navigate("/dashboard"); 
    } catch (error) {
      
      if (error.response) {
        setError(error.response.data.message || "Login failed");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white overflow-hidden px-4 md:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-full">
        {/* Left Section */}
        <div className="hidden md:flex md:flex-col md:w-1/2 bg-[#E9EBF7] px-8 py-20">
          <div className="flex flex-col items-center">
            <img src="/crm2.png" alt="CRM Logo" className="w-32 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4 text-center">
              Customer Relationship <br /> Management & SALES
            </h1>
            <p className="text-center text-[14px] lg:text-[16px] px-4 py-6 font-roboto text-gray-600">
              Welcome to the HRM System. Log in to manage your personal
              information, time and attendance, and performance reviews
              securely. Your data is protected with the highest security
              standards.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full bg-[#f4e7df] flex items-center justify-center p-8">
          <div className="p-6 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-4">Welcome</h2>
            <h3 className="text-2xl font-bold text-[#135078] text-center mb-6">
              Super Admin Login
            </h3>
            {error && <p className="text-black text-center mb-4">{error}</p>}
            <p className="text-center text-[#000000] mb-8 text-[20px]">
              Log in to your account to continue
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none bg-[#f1d9c9] placeholder:text-black text-center"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none bg-[#f1d9c9] placeholder:text-black text-center"
                  required
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <Link to="/resetPassword" className="text-black">
                  Forget your password?
                </Link>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-24 py-2 px-6 lg:px-7 rounded-full text-gray-700 bg-[#f1d9c9] hover:bg-[#f5ceb3] mt-16 lg:mt-20 font-roboto"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
