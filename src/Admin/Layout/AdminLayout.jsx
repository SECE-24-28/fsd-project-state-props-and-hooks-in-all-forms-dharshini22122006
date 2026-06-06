import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Admin.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;