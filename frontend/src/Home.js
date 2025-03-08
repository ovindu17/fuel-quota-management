import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/button";
import { GiGasPump } from "react-icons/gi"; // Changed to GiGasPump

function Home() {
  const navigate = useNavigate();

  const routes = [
    { path: "/admin-login", name: "Admin Login" },
    { path: "/vehicle-login", name: "Vehicle Login" },
    { path: "/vehicle-register", name: "Vehicle Register" },
    { path: "/station-login", name: "Station Login" },
    { path: "/station-register", name: "Station Register" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-12 text-center">
      <div className="mb-4">
        <GiGasPump className="mx-auto text-6xl text-blue-600" />{" "}
      </div>
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Fuel Management System
      </h1>
      <p className="mb-8 text-2xl font-extralight text-gray-800">
        This page is for testing purposes only
      </p>
      <div className="mx-auto max-w-md flex flex-col space-y-4">
        {routes.map((route) => (
          <Button
            key={route.path}
            onClick={() => navigate(route.path)}
            variant="primary"
            className="w-full text-lg py-4 bg-blue-700"
          >
            {route.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Home;
