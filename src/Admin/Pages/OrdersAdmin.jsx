import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "../Layout/AdminLayout";
import "../Admin.css";

const STATUS_COLORS = {
  Pending: { bg: "#fff3cd", color: "#856404" },
  Processing: { bg: "#cce5ff", color: "#004085" },
  Shipped: { bg: "#d1ecf1", color: "#0c5460" },
  Delivered: { bg: "#d4edda", color: "#155724" },
  Cancelled: { bg: "#f8d7da", color: "#721c24" },
};

const STATUSES = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

function OrdersAdmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const token = localStorage.getItem("token");

  const fetchOrders = React.useCallback(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/orders/all", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data))
      .catch(() => {
        // Mock data for demo
        setOrders([
          { id: "1001", userEmail: "alice@example.com", total: 1299, status: "Delivered", createdAt: "2024-05-01T10:00:00Z", items: [{ name: "Gym Shorts", qty: 2, price: 499 }] },
          { id: "1002", userEmail: "bob@example.com", total: 2799, status: "Shipped", createdAt: "2024-05-05T12:30:00Z", items: [{ name: "Sports Bra", qty: 1, price: 799 }] },
          { id: "1003", userEmail: "carol@example.com", total: 599, status: "Pending", createdAt: "2024-05-07T08:00:00Z", items: [{ name: "Yoga Mat", qty: 1, price: 599 }] },
          { id: "1004", userEmail: "dave@example.com", total: 3999, status: "Processing", createdAt: "2024-05-08T16:00:00Z", items: [{ name: "Running Shoes", qty: 1, price: 3999 }] },
          { id: "1005", userEmail: "eve@example.com", total: 899, status: "Cancelled", createdAt: "2024-05-09T11:00:00Z", items: [{ name: "Tank Top", qty: 2, price: 299 }] },
        ]);
      })
      .finally(() => setLoading(false));
  }, [token]);

  React.useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const handleStatusChange = (orderId, newStatus) => {
    axios
      .put(
        `http://localhost:5000/api/orders/${orderId}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setOrders((prev) =>
          prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
        );
        if (selectedOrder?.id === orderId) {
          setSelectedOrder((prev) => ({ ...prev, status: newStatus }));
        }
      })
      .catch(console.error);
  };

  const handleDelete = (orderId) => {
    if (!window.confirm("Delete this order?")) return;
    axios
      .delete(`http://localhost:5000/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setOrders((prev) => prev.filter((o) => o.id !== orderId));
        if (selectedOrder?.id === orderId) setSelectedOrder(null);
      })
      .catch(console.error);
  };

  const filtered = orders.filter((o) => {
    const matchSearch =
      o.id?.toString().includes(search) ||
      o.userEmail?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter ? o.status === statusFilter : true;
    return matchSearch && matchStatus;
  });

  return (
    <AdminLayout>
      <div style={{ padding: "0 0 30px" }}>
        {/* Page Title */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>Orders Management</h2>
          <p style={{ color: "#888", marginTop: 4 }}>View and manage all customer orders</p>
        </div>

        {/* Filters */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "16px 20px",
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginBottom: 20,
            boxShadow: "0 2px 10px rgba(0,0,0,.05)",
          }}
        >
          <input
            placeholder="🔍  Search by order ID or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1,
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid #e0e0e0",
              fontSize: 15,
              outline: "none",
            }}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid #e0e0e0",
              fontSize: 15,
              background: "#fff",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="">All Statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <span style={{ color: "#888", fontSize: 14, whiteSpace: "nowrap" }}>
            {filtered.length} orders
          </span>
        </div>

        {/* Table */}
        <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 10px rgba(0,0,0,.05)", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f9fa", borderBottom: "2px solid #eee" }}>
                {["Order ID", "Customer", "Items", "Total", "Status", "Date", "Actions"].map((h) => (
                  <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontSize: 14, fontWeight: 700, color: "#555" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", padding: 40, color: "#888" }}>
                    Loading orders...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", padding: 40, color: "#888" }}>
                    No orders found
                  </td>
                </tr>
              ) : (
                filtered.map((order, idx) => {
                  const statusStyle = STATUS_COLORS[order.status] || { bg: "#eee", color: "#333" };
                  return (
                    <tr
                      key={order.id}
                      style={{
                        borderBottom: "1px solid #f0f0f0",
                        background: idx % 2 === 0 ? "#fff" : "#fafafa",
                        transition: "background .15s",
                      }}
                    >
                      <td style={{ padding: "14px 18px", fontWeight: 700, color: "#c40000" }}>#{order.id}</td>
                      <td style={{ padding: "14px 18px", fontSize: 14 }}>{order.userEmail}</td>
                      <td style={{ padding: "14px 18px", fontSize: 13, color: "#666" }}>
                        {Array.isArray(order.items) ? order.items.length : 1} item(s)
                      </td>
                      <td style={{ padding: "14px 18px", fontWeight: 700 }}>₹{order.total?.toLocaleString()}</td>
                      <td style={{ padding: "14px 18px" }}>
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          style={{
                            padding: "5px 10px",
                            borderRadius: 20,
                            border: "none",
                            background: statusStyle.bg,
                            color: statusStyle.color,
                            fontWeight: 600,
                            fontSize: 13,
                            cursor: "pointer",
                            outline: "none",
                          }}
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </td>
                      <td style={{ padding: "14px 18px", fontSize: 13, color: "#666" }}>
                        {new Date(order.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                      <td style={{ padding: "14px 18px" }}>
                        <button
                          onClick={() => setSelectedOrder(order)}
                          style={{
                            padding: "6px 14px",
                            borderRadius: 8,
                            border: "1px solid #c40000",
                            background: "transparent",
                            color: "#c40000",
                            fontWeight: 600,
                            cursor: "pointer",
                            marginRight: 8,
                            fontSize: 13,
                          }}
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDelete(order.id)}
                          style={{
                            padding: "6px 14px",
                            borderRadius: 8,
                            border: "none",
                            background: "#fee2e2",
                            color: "#dc2626",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontSize: 13,
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={() => setSelectedOrder(null)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: 32,
              width: 480,
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>Order #{selectedOrder.id}</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#666" }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              <div style={{ background: "#f8f9fa", padding: 14, borderRadius: 12 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Customer</div>
                <div style={{ fontWeight: 600 }}>{selectedOrder.userEmail}</div>
              </div>
              <div style={{ background: "#f8f9fa", padding: 14, borderRadius: 12 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Total</div>
                <div style={{ fontWeight: 700, color: "#c40000", fontSize: 18 }}>₹{selectedOrder.total?.toLocaleString()}</div>
              </div>
              <div style={{ background: "#f8f9fa", padding: 14, borderRadius: 12 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Status</div>
                <div style={{ fontWeight: 600 }}>{selectedOrder.status}</div>
              </div>
              <div style={{ background: "#f8f9fa", padding: 14, borderRadius: 12 }}>
                <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Date</div>
                <div style={{ fontWeight: 600 }}>{new Date(selectedOrder.createdAt).toLocaleDateString()}</div>
              </div>
            </div>

            <h4 style={{ fontWeight: 700, marginBottom: 12 }}>Items</h4>
            {Array.isArray(selectedOrder.items) ? (
              selectedOrder.items.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f0", fontSize: 14 }}>
                  <span>{item.name} × {item.qty || 1}</span>
                  <span style={{ fontWeight: 700 }}>₹{item.price?.toLocaleString()}</span>
                </div>
              ))
            ) : (
              <p style={{ color: "#888" }}>No item details</p>
            )}

            {selectedOrder.shippingAddress && (
              <>
                <h4 style={{ fontWeight: 700, margin: "20px 0 12px" }}>Shipping Address</h4>
                <div style={{ background: "#f8f9fa", padding: 14, borderRadius: 12, fontSize: 14, lineHeight: 1.6 }}>
                  {selectedOrder.shippingAddress.address}, {selectedOrder.shippingAddress.city},{" "}
                  {selectedOrder.shippingAddress.state} - {selectedOrder.shippingAddress.pincode}
                </div>
              </>
            )}

            <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
              <select
                value={selectedOrder.status}
                onChange={(e) => handleStatusChange(selectedOrder.id, e.target.value)}
                style={{ flex: 1, padding: "10px 14px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14 }}
              >
                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <button
                onClick={() => setSelectedOrder(null)}
                style={{ padding: "10px 20px", borderRadius: 10, background: "#c40000", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default OrdersAdmin;
