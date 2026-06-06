import React from "react";
import "../Admin.css";
import AdminLayout from "../Layout/AdminLayout";

import Header from "../Components/Header";
import StatsCard from "../Components/StatsCard";
import SalesChart from "../Components/SalesChart";
import RecentOrders from "../Components/RecentOrders";
import TopProducts from "../Components/TopProducts";
import OrderStatus from "../Components/OrderStatus";
import RecentUsers from "../Components/RecentUsers";
import Footer from "../Components/Footer";

import {
  ShoppingBag,
  AttachMoney,
  Group,
  Inventory2,
} from "@mui/icons-material";

function Dashboard() {
  return (
    <AdminLayout>
      <Header />

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px",
          marginTop: "25px",
        }}
      >
        <StatsCard
          title="Total Orders"
          value="1,248"
          percentage="12.5%"
          icon={<ShoppingBag />}
          iconBg="#fdecec"
        />

        <StatsCard
          title="Total Revenue"
          value="₹2,48,650"
          percentage="18.4%"
          icon={<AttachMoney />}
          iconBg="#e7f7ea"
        />

        <StatsCard
          title="Total Users"
          value="2,356"
          percentage="10.2%"
          icon={<Group />}
          iconBg="#fff3dc"
        />

        <StatsCard
          title="Total Products"
          value="356"
          percentage="7.8%"
          icon={<Inventory2 />}
          iconBg="#f2eaff"
        />
      </div>

      {/* Chart + Orders */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "25px",
          marginTop: "25px",
          alignItems: "start",
        }}
      >
        <SalesChart />
        <RecentOrders />
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 0.9fr 0.8fr",
          gap: "25px",
          marginTop: "25px",
          alignItems: "start",
        }}
      >
        <TopProducts />
        <OrderStatus />
        <RecentUsers />
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "40px",
        }}
      >
        <Footer />
      </div>
    </AdminLayout>
  );
}

export default Dashboard;