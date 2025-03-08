import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VehicleRegister from "./vehicleRegister";
import VehicleLogin from "./vehicleLogin";
import VehicleDashboard from "./vehicleDashboard";
import AdminLogin from "./adminLogin";
import AdminDashboard from "./adminDashboard";
import StationDashboard from "./stationDashboard";
import StationRegister from "./stationRegister";
import StationLogin from "./stationLogin";
import AdminStations from "./adminStations";
import AdminDistributions from "./adminDis";
import StationEmployeeRegistration from "./stationEmpReg";
import AdminHistory from "./adminHistory";
import StationTransac from "./stationTransac";
import StationReq from "./stationReq";
import AdminStaReq from "./adminStaReq";
import Home from "./Home";

// Import your icons from your preferred icon library

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle-login" element={<VehicleLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/vehicle-register" element={<VehicleRegister />} />
        <Route path="/vehicle-dashboard" element={<VehicleDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/station-dashboard" element={<StationDashboard />} />
        <Route path="/station-register" element={<StationRegister />} />
        <Route path="/station-login" element={<StationLogin />} />
        <Route path="/admin-stations" element={<AdminStations />} />
        <Route path="/admin-distributions" element={<AdminDistributions />} />
        <Route
          path="/station-employee-register"
          element={<StationEmployeeRegistration />}
        />
        <Route path="/admin-history" element={<AdminHistory />} />
        <Route path="/station-transac" element={<StationTransac />} />
        <Route path="/station-req" element={<StationReq />} />
        <Route path="/admin-req" element={<AdminStaReq />} />
      </Routes>
    </BrowserRouter>
  );
}

// Add styles for the app layout
const styles = `
  .App {
    min-height: 100vh;
  }

  .content {
    padding-top: 80px; /* Adjust based on navbar height */
  }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default App;
