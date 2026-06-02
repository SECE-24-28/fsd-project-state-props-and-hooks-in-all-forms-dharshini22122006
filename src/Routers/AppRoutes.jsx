import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import AboutPage from "../Pages/AboutPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import Hi from "../Pages/Hi";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hi" element={<Hi />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
export default AppRoutes;
