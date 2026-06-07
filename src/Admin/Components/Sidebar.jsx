import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Dashboard,
  Inventory2,
  ShoppingCart,
  People,
  LocalOffer,
  Assessment,
  Settings,
  Logout,
  Category,
} from "@mui/icons-material";

const menuItems = [
  { label: "Dashboard", icon: <Dashboard />, path: "/admin" },
  { label: "Products", icon: <Inventory2 />, path: "/admin/products" },
  { label: "Categories", icon: <Category />, path: "/admin/categories" },
  { label: "Orders", icon: <ShoppingCart />, path: "/admin/orders" },
  { label: "Users", icon: <People />, path: "/admin/users" },
  { label: "Coupons", icon: <LocalOffer />, path: "/admin/coupons" },
  { label: "Reports", icon: <Assessment />, path: "/admin/reports" },
  { label: "Settings", icon: <Settings />, path: "/admin/settings" },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h1 className="logo">Fab Fit</h1>
      <p className="subtitle">Admin Panel</p>

      <div className="menu">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className={`menu-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            {item.icon} {item.label}
          </div>
        ))}
      </div>

      <div className="admin-card">
        <h2>Admin</h2>
        <p>Super Admin</p>

        <div
          style={{
            marginTop: "15px",
            borderTop: "1px solid rgba(255,255,255,.2)",
            paddingTop: "15px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
          onClick={handleLogout}
        >
          <Logout /> Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;