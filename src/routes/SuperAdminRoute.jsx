import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ResetPassword from "../components/ResetPassword";
import SuperAdminLogin from "../components/SuperAdminLogin";
import VerificationCode from "../components/VerificationCode";

const SuperAdminRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SuperAdminLogin />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifycode" element={<VerificationCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SuperAdminRoute;
