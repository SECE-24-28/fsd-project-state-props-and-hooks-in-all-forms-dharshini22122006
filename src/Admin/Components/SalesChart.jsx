import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "May 1", revenue: 8000 },
  { name: "May 6", revenue: 9000 },
  { name: "May 11", revenue: 18000 },
  { name: "May 16", revenue: 19000 },
  { name: "May 21", revenue: 30000 },
  { name: "May 26", revenue: 18000 },
  { name: "May 31", revenue: 32000 },
];

function SalesChart() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "20px",
        height: "420px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h5>Sales Overview</h5>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#ef4444"
            fill="#fecaca"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;