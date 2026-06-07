import React, { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import "../Admin.css";

const INITIAL_COUPONS = [
  { id: 1, code: "FIT10", discount: 10, type: "percentage", minOrder: 500, expiresAt: "2024-12-31", usageLimit: 100, used: 34, active: true },
  { id: 2, code: "SAVE200", discount: 200, type: "flat", minOrder: 1500, expiresAt: "2024-11-30", usageLimit: 50, used: 12, active: true },
  { id: 3, code: "WELCOME20", discount: 20, type: "percentage", minOrder: 0, expiresAt: "2024-10-01", usageLimit: 200, used: 200, active: false },
  { id: 4, code: "SUMMER15", discount: 15, type: "percentage", minOrder: 800, expiresAt: "2024-09-30", usageLimit: 150, used: 67, active: true },
];

const EMPTY = { code: "", discount: "", type: "percentage", minOrder: "", expiresAt: "", usageLimit: "", active: true };

function CouponsAdmin() {
  const [coupons, setCoupons] = useState(INITIAL_COUPONS);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      setCoupons((prev) => prev.map((c) => (c.id === editingId ? { ...c, ...form, id: editingId } : c)));
    } else {
      const newId = coupons.reduce((max, c) => Math.max(max, c.id), 0) + 1;
      setCoupons((prev) => [...prev, { ...form, id: newId, used: 0 }]);
    }
    setForm(EMPTY);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (coupon) => {
    setForm({ ...coupon });
    setEditingId(coupon.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this coupon?")) return;
    setCoupons((prev) => prev.filter((c) => c.id !== id));
  };

  const toggleActive = (id) => {
    setCoupons((prev) => prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c)));
  };

  return (
    <AdminLayout>
      <div style={{ paddingBottom: 30 }}>
        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>Coupons & Offers</h2>
            <p style={{ color: "#888", marginTop: 4 }}>Manage discount codes and promotions</p>
          </div>
          <button
            onClick={() => { setForm(EMPTY); setEditingId(null); setShowForm(true); }}
            style={{
              padding: "12px 24px", borderRadius: 12, background: "#c40000",
              color: "#fff", border: "none", fontWeight: 700, fontSize: 15,
              cursor: "pointer", boxShadow: "0 4px 15px rgba(196,0,0,.3)"
            }}
          >
            + Add Coupon
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Total Coupons", value: coupons.length, color: "#c40000" },
            { label: "Active", value: coupons.filter(c => c.active).length, color: "#16a34a" },
            { label: "Total Uses", value: coupons.reduce((s, c) => s + (c.used || 0), 0), color: "#2563eb" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>
              <div style={{ fontSize: 13, color: "#888" }}>{s.label}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: s.color, marginTop: 6 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 10px rgba(0,0,0,.05)", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f9fa", borderBottom: "2px solid #eee" }}>
                {["Code", "Discount", "Type", "Min Order", "Expires", "Used / Limit", "Status", "Actions"].map(h => (
                  <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontSize: 14, fontWeight: 700, color: "#555" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon, idx) => (
                <tr key={coupon.id} style={{ borderBottom: "1px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <td style={{ padding: "14px 18px" }}>
                    <span style={{
                      background: "#fff0f0", color: "#c40000", padding: "4px 10px",
                      borderRadius: 6, fontWeight: 700, fontSize: 14, letterSpacing: 1
                    }}>
                      {coupon.code}
                    </span>
                  </td>
                  <td style={{ padding: "14px 18px", fontWeight: 700, fontSize: 16 }}>
                    {coupon.type === "percentage" ? `${coupon.discount}%` : `₹${coupon.discount}`}
                  </td>
                  <td style={{ padding: "14px 18px", fontSize: 13, color: "#666" }}>
                    {coupon.type === "percentage" ? "Percentage" : "Flat"}
                  </td>
                  <td style={{ padding: "14px 18px", fontSize: 14 }}>₹{coupon.minOrder || 0}</td>
                  <td style={{ padding: "14px 18px", fontSize: 13, color: new Date(coupon.expiresAt) < new Date() ? "#dc2626" : "#444" }}>
                    {coupon.expiresAt}
                  </td>
                  <td style={{ padding: "14px 18px", fontSize: 14 }}>
                    <div style={{ background: "#f0f0f0", borderRadius: 20, height: 6, width: 80, overflow: "hidden", display: "inline-block", marginRight: 8, verticalAlign: "middle" }}>
                      <div style={{ background: "#c40000", height: "100%", width: `${Math.min(100, ((coupon.used || 0) / (coupon.usageLimit || 1)) * 100)}%` }} />
                    </div>
                    {coupon.used || 0} / {coupon.usageLimit}
                  </td>
                  <td style={{ padding: "14px 18px" }}>
                    <button
                      onClick={() => toggleActive(coupon.id)}
                      style={{
                        padding: "5px 14px", borderRadius: 20, border: "none",
                        background: coupon.active ? "#d1fae5" : "#fee2e2",
                        color: coupon.active ? "#059669" : "#dc2626",
                        fontWeight: 700, cursor: "pointer", fontSize: 13
                      }}
                    >
                      {coupon.active ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td style={{ padding: "14px 18px" }}>
                    <button onClick={() => handleEdit(coupon)} style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid #c40000", background: "transparent", color: "#c40000", fontWeight: 600, cursor: "pointer", marginRight: 8, fontSize: 13 }}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(coupon.id)} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "#fee2e2", color: "#dc2626", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 32, width: 500, boxShadow: "0 20px 60px rgba(0,0,0,.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>{editingId ? "Edit Coupon" : "Add New Coupon"}</h3>
              <button onClick={() => setShowForm(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#666" }}>✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { name: "code", label: "Coupon Code", placeholder: "e.g. SAVE10" },
                  { name: "discount", label: "Discount Value", placeholder: "e.g. 10 or 200", type: "number" },
                  { name: "minOrder", label: "Min Order Amount", placeholder: "e.g. 500", type: "number" },
                  { name: "usageLimit", label: "Usage Limit", placeholder: "e.g. 100", type: "number" },
                  { name: "expiresAt", label: "Expiry Date", type: "date" },
                ].map((f) => (
                  <div key={f.name}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type || "text"}
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none" }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>Discount Type</label>
                  <select name="type" value={form.type} onChange={handleChange} style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none" }}>
                    <option value="percentage">Percentage (%)</option>
                    <option value="flat">Flat (₹)</option>
                  </select>
                </div>
              </div>
              <label style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16, cursor: "pointer" }}>
                <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
                <span style={{ fontSize: 14, fontWeight: 600 }}>Active</span>
              </label>
              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid #ddd", background: "#fff", fontWeight: 700, cursor: "pointer" }}>
                  Cancel
                </button>
                <button type="submit" style={{ flex: 1, padding: "12px", borderRadius: 10, background: "#c40000", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", fontSize: 15 }}>
                  {editingId ? "Update Coupon" : "Add Coupon"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default CouponsAdmin;
