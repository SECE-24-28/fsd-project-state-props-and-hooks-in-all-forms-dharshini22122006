import React from "react";
import {
  Dashboard,
  Inventory2,
  Category,
  ShoppingCart,
  People,
  LocalOffer,
  Reviews,
  Assessment,
  Settings,
  Logout,
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">Fab Fit</h1>
      <p className="subtitle">Admin Panel</p>

      <div className="menu">
        <div className="menu-item active">
          <Dashboard /> Dashboard
        </div>

        <div className="menu-item">
          <Inventory2 /> Products
        </div>

        <div className="menu-item">
          <Category /> Categories
        </div>

        <div className="menu-item">
          <ShoppingCart /> Orders
        </div>

        <div className="menu-item">
          <People /> Users
        </div>

        <div className="menu-item">
          <LocalOffer /> Coupons
        </div>

        <div className="menu-item">
          <Reviews /> Reviews
        </div>

        <div className="menu-item">
          <Assessment /> Reports
        </div>

        <div className="menu-item">
          <Settings /> Settings
        </div>
      </div>

      <div className="admin-card">
        <h2>Admin</h2>
        <p>Super Admin</p>

        <div
          style={{
            marginTop: "15px",
            borderTop: "1px solid rgba(255,255,255,.2)",
            paddingTop: "15px",
          }}
        >
          <Logout /> Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;