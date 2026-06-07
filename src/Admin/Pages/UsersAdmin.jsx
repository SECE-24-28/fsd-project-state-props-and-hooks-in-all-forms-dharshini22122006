import React, { useState } from "react";
import axios from "axios";
import AdminLayout from "../Layout/AdminLayout";
import "../Admin.css";

function UsersAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchUsers = React.useCallback(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch(() => {
        // Mock demo data
        setUsers([
          { id: "u1", email: "alice@example.com", firstname: "Alice", lastname: "Johnson", phone: "9876543210", createdAt: "2024-01-10T10:00:00Z", lastSignIn: "2024-05-01T10:00:00Z" },
          { id: "u2", email: "bob@example.com", firstname: "Bob", lastname: "Smith", phone: "9123456789", createdAt: "2024-02-14T14:00:00Z", lastSignIn: "2024-04-28T08:30:00Z" },
          { id: "u3", email: "carol@example.com", firstname: "Carol", lastname: "White", phone: "8012345678", createdAt: "2024-03-22T09:00:00Z", lastSignIn: "2024-05-07T18:00:00Z" },
          { id: "u4", email: "dave@example.com", firstname: "Dave", lastname: "Brown", phone: "7890123456", createdAt: "2024-04-01T11:00:00Z", lastSignIn: "2024-05-08T12:00:00Z" },
          { id: "u5", email: "eve@example.com", firstname: "Eve", lastname: "Davis", phone: "9988776655", createdAt: "2024-05-05T07:00:00Z", lastSignIn: "2024-05-09T09:00:00Z" },
        ]);
      })
      .finally(() => setLoading(false));
  }, [token]);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = (userId) => {
    if (!window.confirm("Delete this user? This cannot be undone.")) return;
    axios
      .delete(`http://localhost:5000/api/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setUsers((prev) => prev.filter((u) => u.id !== userId)))
      .catch(console.error);
  };

  const filtered = users.filter((u) => {
    const term = search.toLowerCase();
    return (
      u.email?.toLowerCase().includes(term) ||
      u.firstname?.toLowerCase().includes(term) ||
      u.lastname?.toLowerCase().includes(term)
    );
  });

  return (
    <AdminLayout>
      <div style={{ paddingBottom: 30 }}>
        {/* Title */}
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>Users Management</h2>
          <p style={{ color: "#888", marginTop: 4 }}>View all registered customers</p>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Total Users", value: users.length, color: "#c40000" },
            { label: "Active Today", value: users.filter(u => u.lastSignIn && new Date(u.lastSignIn).toDateString() === new Date().toDateString()).length, color: "#16a34a" },
            { label: "New This Month", value: users.filter(u => { const d = new Date(u.createdAt); const n = new Date(); return d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); }).length, color: "#2563eb" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>
              <div style={{ fontSize: 13, color: "#888" }}>{s.label}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: s.color, marginTop: 6 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ background: "#fff", borderRadius: 14, padding: "14px 18px", marginBottom: 20, boxShadow: "0 2px 10px rgba(0,0,0,.05)", display: "flex", gap: 12, alignItems: "center" }}>
          <input
            placeholder="🔍  Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1, padding: "10px 16px", borderRadius: 10, border: "1px solid #e0e0e0", fontSize: 15, outline: "none" }}
          />
          <span style={{ color: "#888", fontSize: 14 }}>{filtered.length} users</span>
        </div>

        {/* Table */}
        <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 10px rgba(0,0,0,.05)", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f9fa", borderBottom: "2px solid #eee" }}>
                {["#", "Name", "Email", "Phone", "Joined", "Last Active", "Actions"].map((h) => (
                  <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontSize: 14, fontWeight: 700, color: "#555" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={7} style={{ textAlign: "center", padding: 40, color: "#888" }}>Loading users...</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={7} style={{ textAlign: "center", padding: 40, color: "#888" }}>No users found</td></tr>
              ) : (
                filtered.map((user, idx) => (
                  <tr key={user.id} style={{ borderBottom: "1px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "14px 18px", color: "#888", fontSize: 14 }}>{idx + 1}</td>
                    <td style={{ padding: "14px 18px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: "50%",
                          background: "linear-gradient(135deg, #c40000, #ff6b6b)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#fff", fontWeight: 700, fontSize: 14
                        }}>
                          {(user.firstname?.[0] || user.email?.[0] || "?").toUpperCase()}
                        </div>
                        <span style={{ fontWeight: 600 }}>{user.firstname} {user.lastname}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 18px", fontSize: 14, color: "#444" }}>{user.email}</td>
                    <td style={{ padding: "14px 18px", fontSize: 14, color: "#666" }}>{user.phone || "—"}</td>
                    <td style={{ padding: "14px 18px", fontSize: 13, color: "#666" }}>
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
                    </td>
                    <td style={{ padding: "14px 18px", fontSize: 13, color: "#666" }}>
                      {user.lastSignIn ? new Date(user.lastSignIn).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "Never"}
                    </td>
                    <td style={{ padding: "14px 18px" }}>
                      <button
                        onClick={() => handleDelete(user.id)}
                        style={{
                          padding: "6px 14px", borderRadius: 8, border: "none",
                          background: "#fee2e2", color: "#dc2626", fontWeight: 600,
                          cursor: "pointer", fontSize: 13
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

export default UsersAdmin;
