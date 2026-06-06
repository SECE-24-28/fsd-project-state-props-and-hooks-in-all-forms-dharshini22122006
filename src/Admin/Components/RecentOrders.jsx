import React from "react";

function RecentOrders() {
  const orders = [
    {
      id: "#ORD1248",
      customer: "Rahul Sharma",
      amount: "₹1299",
      status: "Delivered",
    },
    {
      id: "#ORD1247",
      customer: "Priya Verma",
      amount: "₹2499",
      status: "Processing",
    },
    {
      id: "#ORD1246",
      customer: "Amit Kumar",
      amount: "₹899",
      status: "Shipped",
    },
    {
      id: "#ORD1245",
      customer: "Sneha Reddy",
      amount: "₹1799",
      status: "Delivered",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "30px",
        height: "420px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h5>Recent Orders</h5>

      {orders.map((order, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            fontSize:"12px",
            height:"60px",
            justifyContent: "space-between",
            padding: "20px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <strong>{order.id}</strong>

          <span>{order.customer}</span>

          <span>{order.amount}</span>

          <span
            style={{
              color:
                order.status === "Delivered"
                  ? "green"
                  : order.status === "Processing"
                  ? "orange"
                  : "purple",
            }}
          >
            {order.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RecentOrders;