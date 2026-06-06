import React from "react";

function StatsCard({
  title,
  value,
  percentage,
  icon,
  iconBg,
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "18px",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: iconBg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
        }}
      >
        {icon}
      </div>

      <div>
        <h3
          style={{
            margin: 0,
            height:"20px",
            fontSize:"18px",
            color: "#666",
            fontWeight: "500",
          }}
        >
          {title}
        </h3>

        <h1
          style={{
            margin: "10px 0",
            fontSize: "20px",
            height:"20px",
          }}
        >
          {value}
        </h1>

        <p
          style={{
            color: "#16a34a",
            margin: 0,
            fontSize:"12px",
          }}
        >
          ↑ {percentage} from last month
        </p>
      </div>
    </div>
  );
}

export default StatsCard;