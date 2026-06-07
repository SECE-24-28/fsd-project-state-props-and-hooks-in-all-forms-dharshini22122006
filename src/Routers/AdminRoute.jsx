import React from "react";
import { Navigate } from "react-router-dom";

/**
 * AdminRoute — protects all /admin/* pages.
 * If not logged in → redirect to /login
 * If logged in but not admin → redirect to / with access denied
 */
function AdminRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
