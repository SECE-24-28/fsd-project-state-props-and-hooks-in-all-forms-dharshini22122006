import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage.jsx";
import AboutPage from "../Pages/AboutPage.jsx";
import LoginPage from "../Pages/LoginPage.jsx";
import SignupPage from "../Pages/SignupPage.jsx";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage.jsx";
import ProductsPage from "../Pages/ProductsPage.jsx";
import ProductDetailPage from "../Pages/ProductDetailPage.jsx";
import CartPage from "../Pages/CartPage.jsx";
import OrdersPage from "../Pages/OrdersPage.jsx";
import FAQPage from "../Pages/FAQPage.jsx";
import PrivacyPolicyPage from "../Pages/PrivacyPolicyPage.jsx";
import TermsConditionsPage from "../Pages/TermsConditionsPage.jsx";
import NotFoundPage from "../Pages/NotFoundPage.jsx";

// Admin Pages
import Dashboard from "../Admin/Pages/Dashboard.jsx";
import ProductsAdmin from "../Admin/Pages/ProductsAdmin.jsx";
import OrdersAdmin from "../Admin/Pages/OrdersAdmin.jsx";
import UsersAdmin from "../Admin/Pages/UsersAdmin.jsx";
import CouponsAdmin from "../Admin/Pages/CouponsAdmin.jsx";
import ReportsAdmin from "../Admin/Pages/ReportsAdmin.jsx";
import SettingsAdmin from "../Admin/Pages/SettingsAdmin.jsx";
import CategoriesAdmin from "../Admin/Pages/CategoriesAdmin.jsx";

// Route Guard
import AdminRoute from "./AdminRoute.jsx";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />

        {/* ── Admin Routes (Protected) ── */}
        <Route path="/admin" element={<AdminRoute><Dashboard /></AdminRoute>} />
        <Route path="/admin/products" element={<AdminRoute><ProductsAdmin /></AdminRoute>} />
        <Route path="/admin/categories" element={<AdminRoute><CategoriesAdmin /></AdminRoute>} />
        <Route path="/admin/orders" element={<AdminRoute><OrdersAdmin /></AdminRoute>} />
        <Route path="/admin/users" element={<AdminRoute><UsersAdmin /></AdminRoute>} />
        <Route path="/admin/coupons" element={<AdminRoute><CouponsAdmin /></AdminRoute>} />
        <Route path="/admin/reports" element={<AdminRoute><ReportsAdmin /></AdminRoute>} />
        <Route path="/admin/settings" element={<AdminRoute><SettingsAdmin /></AdminRoute>} />

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
