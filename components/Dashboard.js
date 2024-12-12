import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const Dashboard = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
};

export default Dashboard;
