// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.email || !formData.password) {
      toast.error("Both fields are required");
      return;
    }

    setIsSubmitting(true);

    // Simulate login
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Logged in successfully!");
      navigate("/home");
    }, 2000); // Simulating a network request delay
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 bg-blue-600 rounded text-white hover:bg-blue-700 transition duration-300"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-4 text-gray-400">
          Don't have an account?{" "}
          <Link to="/get-started" className="text-blue-500 hover:underline">
            Get started here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
