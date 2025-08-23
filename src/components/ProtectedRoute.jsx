// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if user is logged in
  if (!token) {
    alert("You need to login first!");
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
