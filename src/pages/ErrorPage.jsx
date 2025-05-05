// src/pages/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
