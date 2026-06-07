import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage.jsx";
import AboutPage from "../Pages/AboutPage.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import SignupPage from "../Pages/SignupPage.jsx";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage.jsx";
import Dashboard from "../Admin/Pages/Dashboard.jsx";
import ProductsPage from "../Pages/ProductsPage.jsx";
import ProductDetailPage from "../Pages/ProductDetailPage.jsx";
import CartPage from "../Pages/CartPage.jsx";
import OrdersPage from "../Pages/OrdersPage.jsx";
import FAQPage from "../Pages/FAQPage.jsx";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage.jsx";
import TermsConditionsPage from "../Pages/TermsConditionsPage.jsx";

import NotFoundPage from "../Pages/NotFoundPage.jsx";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
