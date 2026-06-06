import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import AboutPage from "../Pages/AboutPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import Dashboard from "../Admin/Pages/Dashboard";
import ProductsPage from "../Pages/ProductsPage";
import CartPage from "../Pages/CartPage";          

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route
  path="/products"
  element={<ProductsPage />}
/>
<Route
  path="/cart"
  element={<CartPage />}
/>

        <Route path="/forgot-password" element={<ForgotPasswordPage />}/>
         </Routes>
    </>
  );
}
export default AppRoutes;
