import React from "react";
import {
  Menu,
  Search,
  NotificationsNone,
  ArrowDropDown,
} from "@mui/icons-material";

function Header() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px 30px",
        height: "90px",
        borderRadius: "20px",
        fontSize:"50",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* Left */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Menu sx={{ fontSize: 35 }} />

        <h1
          style={{
            margin: 0,
            fontSize: "26px",
            fontWeight: "700",
          }}
        >
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "0 15px",
            width: "350px",
            height: "50px",
          }}
        >
          <input
            placeholder="Search..."
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: "16px",
            }}
          />

          <Search sx={{ fontSize: 28 }} />
        </div>

        {/* Notification */}
        <div
          style={{
            position: "relative",
            cursor: "pointer",
          }}
        >
          <NotificationsNone sx={{ fontSize: 34 }} />

          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-5px",
              background: "red",
              color: "#fff",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            5
          </span>
        </div>

        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#f44336",
              color: "#fff",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            A
          </div>

          <span
            style={{
              fontSize: "24px",
              fontWeight: "500",
            }}
          >
            Admin
          </span>

          <ArrowDropDown
            sx={{
              fontSize: 32,
              color: "#555",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;