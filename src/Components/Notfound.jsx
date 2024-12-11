// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="text-blue-500 hover:underline"
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
