import React, { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import "../Admin.css";

const INITIAL_CATEGORIES = [
  { id: 1, name: "Gym Wear", description: "Clothing designed for gym workouts", productCount: 48, icon: "🏋️" },
  { id: 2, name: "Activewear", description: "Versatile activewear for all sports", productCount: 62, icon: "⚡" },
  { id: 3, name: "Footwear", description: "Performance sports shoes and sandals", productCount: 35, icon: "👟" },
  { id: 4, name: "Accessories", description: "Fitness gear and accessories", productCount: 29, icon: "🎽" },
  { id: 5, name: "Yoga & Pilates", description: "Comfortable wear for yoga and pilates", productCount: 24, icon: "🧘" },
  { id: 6, name: "Running", description: "Gear optimized for running", productCount: 19, icon: "🏃" },
];

const EMPTY = { name: "", description: "", icon: "📦" };

function CategoriesAdmin() {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      setCategories((prev) => prev.map((c) => (c.id === editingId ? { ...c, ...form } : c)));
    } else {
      const newId = categories.reduce((max, c) => Math.max(max, c.id), 0) + 1;
      setCategories((prev) => [...prev, { id: newId, ...form, productCount: 0 }]);
    }
    setForm(EMPTY);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (cat) => {
    setForm({ name: cat.name, description: cat.description, icon: cat.icon });
    setEditingId(cat.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this category?")) return;
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <AdminLayout>
      <div style={{ paddingBottom: 30 }}>
        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>Categories</h2>
            <p style={{ color: "#888", marginTop: 4 }}>Manage product categories</p>
          </div>
          <button
            onClick={() => { setForm(EMPTY); setEditingId(null); setShowForm(true); }}
            style={{
              padding: "12px 24px", borderRadius: 12, background: "#c40000",
              color: "#fff", border: "none", fontWeight: 700, fontSize: 15,
              cursor: "pointer", boxShadow: "0 4px 15px rgba(196,0,0,.3)"
            }}
          >
            + Add Category
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { label: "Total Categories", value: categories.length, color: "#c40000" },
            { label: "Total Products", value: categories.reduce((s, c) => s + c.productCount, 0), color: "#2563eb" },
            { label: "Avg Products / Category", value: Math.round(categories.reduce((s, c) => s + c.productCount, 0) / (categories.length || 1)), color: "#d97706" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", borderRadius: 16, padding: "20px 24px", boxShadow: "0 2px 10px rgba(0,0,0,.05)" }}>
              <div style={{ fontSize: 13, color: "#888" }}>{s.label}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: s.color, marginTop: 6 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Category Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {categories.map((cat) => (
            <div key={cat.id} style={{
              background: "#fff", borderRadius: 18, padding: 24,
              boxShadow: "0 2px 10px rgba(0,0,0,.05)",
              border: "1px solid #f0f0f0",
              transition: "transform .2s, box-shadow .2s",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "linear-gradient(135deg, #fff0f0, #ffe0e0)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28
                }}>
                  {cat.icon}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => handleEdit(cat)} style={{ padding: "6px 12px", borderRadius: 8, border: "1px solid #c40000", background: "transparent", color: "#c40000", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(cat.id)} style={{ padding: "6px 12px", borderRadius: 8, border: "none", background: "#fee2e2", color: "#dc2626", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                    Delete
                  </button>
                </div>
              </div>

              <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 16, marginBottom: 6 }}>{cat.name}</h3>
              <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5, marginBottom: 16 }}>{cat.description}</p>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#fff0f0", color: "#c40000",
                padding: "5px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600
              }}>
                📦 {cat.productCount} products
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 32, width: 440, boxShadow: "0 20px 60px rgba(0,0,0,.3)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>{editingId ? "Edit Category" : "Add Category"}</h3>
              <button onClick={() => setShowForm(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#666" }}>✕</button>
            </div>
            <form onSubmit={handleSubmit}>
              {[
                { name: "icon", label: "Icon (emoji)", placeholder: "e.g. 🏋️" },
                { name: "name", label: "Category Name", placeholder: "e.g. Gym Wear" },
                { name: "description", label: "Description", placeholder: "Short description..." },
              ].map((f) => (
                <div key={f.name} style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>{f.label}</label>
                  <input
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    required
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none" }}
                  />
                </div>
              ))}
              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid #ddd", background: "#fff", fontWeight: 700, cursor: "pointer" }}>Cancel</button>
                <button type="submit" style={{ flex: 1, padding: "12px", borderRadius: 10, background: "#c40000", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", fontSize: 15 }}>
                  {editingId ? "Update" : "Add Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default CategoriesAdmin;
