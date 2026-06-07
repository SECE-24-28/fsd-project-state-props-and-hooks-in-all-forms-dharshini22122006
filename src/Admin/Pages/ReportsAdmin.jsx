import React from "react";
import AdminLayout from "../Layout/AdminLayout";
import "../Admin.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const REVENUE_DATA = [28000, 42000, 35000, 51000, 47000, 63000, 58000, 72000, 65000, 80000, 74000, 91000];
const ORDERS_DATA = [120, 180, 150, 220, 200, 270, 245, 310, 280, 340, 315, 390];

const TOP_CATEGORIES = [
  { name: "Gym Wear", sales: 432, revenue: 94500, share: 35 },
  { name: "Activewear", sales: 318, revenue: 72000, share: 26 },
  { name: "Footwear", sales: 241, revenue: 58000, share: 20 },
  { name: "Accessories", sales: 156, revenue: 31000, share: 13 },
  { name: "Others", sales: 72, revenue: 14000, share: 6 },
];

const CATEGORY_COLORS = ["#c40000", "#e55353", "#ff8a8a", "#ffb3b3", "#ffd6d6"];

function ReportsAdmin() {
  const maxRevenue = Math.max(...REVENUE_DATA);

  return (
    <AdminLayout>
      <div style={{ paddingBottom: 30 }}>
        {/* Title */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>Sales Reports</h2>
          <p style={{ color: "#888", marginTop: 4 }}>Overview of revenue, orders, and performance</p>
        </div>

        {/* KPI Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Total Revenue", value: "₹7,86,500", sub: "+22% vs last year", color: "#c40000" },
            { label: "Total Orders", value: "3,123", sub: "+18% vs last year", color: "#16a34a" },
            { label: "Avg Order Value", value: "₹2,518", sub: "+5% vs last year", color: "#2563eb" },
            { label: "Conversion Rate", value: "3.6%", sub: "+0.4% vs last year", color: "#d97706" },
          ].map((k) => (
            <div key={k.label} style={{ background: "#fff", borderRadius: 16, padding: "22px 24px", boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>
              <div style={{ fontSize: 13, color: "#888" }}>{k.label}</div>
              <div style={{ fontSize: 30, fontWeight: 800, color: k.color, margin: "8px 0" }}>{k.value}</div>
              <div style={{ fontSize: 12, color: "#16a34a" }}>↑ {k.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20, marginBottom: 20 }}>
          {/* Revenue Chart */}
          <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Monthly Revenue (2024)</h3>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 24 }}>Total revenue trend over the year</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 180 }}>
              {REVENUE_DATA.map((val, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div
                    style={{
                      width: "100%",
                      height: `${(val / maxRevenue) * 160}px`,
                      background: i === REVENUE_DATA.indexOf(Math.max(...REVENUE_DATA))
                        ? "linear-gradient(to top, #c40000, #ff6b6b)"
                        : "linear-gradient(to top, #ffb3b3, #ffd6d6)",
                      borderRadius: "6px 6px 0 0",
                      transition: "height .3s",
                      position: "relative",
                    }}
                    title={`₹${(val / 1000).toFixed(0)}k`}
                  />
                  <span style={{ fontSize: 10, color: "#999" }}>{MONTHS[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category Breakdown */}
          <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Category Revenue</h3>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 24 }}>Sales by product category</p>

            {TOP_CATEGORIES.map((cat, i) => (
              <div key={cat.name} style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{cat.name}</span>
                  <span style={{ fontSize: 13, color: "#888" }}>{cat.share}%</span>
                </div>
                <div style={{ background: "#f0f0f0", borderRadius: 20, height: 8, overflow: "hidden" }}>
                  <div style={{ background: CATEGORY_COLORS[i], height: "100%", width: `${cat.share}%`, borderRadius: 20, transition: "width .5s" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                  <span style={{ fontSize: 11, color: "#888" }}>{cat.sales} orders</span>
                  <span style={{ fontSize: 11, color: "#888" }}>₹{(cat.revenue / 1000).toFixed(0)}k</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orders Chart */}
        <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>
          <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Monthly Orders (2024)</h3>
          <p style={{ color: "#888", fontSize: 13, marginBottom: 24 }}>Number of orders placed per month</p>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 140 }}>
            {ORDERS_DATA.map((val, i) => {
              const maxVal = Math.max(...ORDERS_DATA);
              return (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 10, color: "#666" }}>{val}</span>
                  <div
                    style={{
                      width: "100%",
                      height: `${(val / maxVal) * 110}px`,
                      background: "linear-gradient(to top, #2563eb, #93c5fd)",
                      borderRadius: "6px 6px 0 0",
                    }}
                  />
                  <span style={{ fontSize: 10, color: "#999" }}>{MONTHS[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default ReportsAdmin;
