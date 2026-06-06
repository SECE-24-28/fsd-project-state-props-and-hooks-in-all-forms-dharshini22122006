import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Delivered",
    value: 45,
    count: 562,
  },
  {
    name: "Processing",
    value: 25,
    count: 312,
  },
  {
    name: "Shipped",
    value: 20,
    count: 250,
  },
  {
    name: "Cancelled",
    value: 10,
    count: 124,
  },
];

const COLORS = [
  "#22c55e",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
];

function OrderStatus() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "20px",
        minHeight: "350px",
      }}
    >
      <h5
  style={{
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "20px",
  }}
>
  Order Status
</h5>

      <div
  style={{
    height:"250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "20px",
  }}
>
        {/* Pie Chart */}
        <div
  style={{
    width: "170px",
    height: "170px",
    flexShrink: 0,
  }}
>
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={data}
                innerRadius={45}
                outerRadius={70}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div
  style={{
    width: "140px",
  }}
>
          {data.map((item, index) => (
            <div
  key={index}
  style={{
    display: "grid",
    gridTemplateColumns: "1fr auto",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  }}
>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background:
                      COLORS[index],
                  }}
                />

                <span
                  style={{
                    fontSize: "14px",
                    fontWeight:"500",
                  }}
                >
                  {item.name}
                </span>
              </div>

              <span
                style={{
                  fontSize: "13px",
                  color: "#555",
                  
                }}
              >
                {item.value}% ({item.count})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;