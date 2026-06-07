import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import AdminLayout from "../Layout/AdminLayout";
import "../Admin.css";

const CATEGORIES = ["Gym Wear", "Activewear", "Footwear", "Accessories", "Yoga & Pilates", "Running"];

const EMPTY_PRODUCT = { name: "", category: "", price: "", stock: "", description: "", image: "" };

function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState(EMPTY_PRODUCT);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name?.toLowerCase().includes(search.toLowerCase());
      const matchCat = categoryFilter ? p.category === categoryFilter : true;
      return matchSearch && matchCat;
    });
  }, [products, search, categoryFilter]);

  const handleEdit = (product) => {
    setForm({ ...product });
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setForm(EMPTY_PRODUCT);
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;
    axios
      .delete(`http://localhost:5000/api/products/${id}`)
      .then(() => setProducts((prev) => prev.filter((p) => p.id !== id)))
      .catch(console.error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editingProduct) {
      axios
        .put(`http://localhost:5000/api/products/${editingProduct.id}`, form)
        .then((res) => {
          setProducts((prev) => prev.map((p) => (p.id === editingProduct.id ? res.data : p)));
          setShowForm(false);
        })
        .catch(console.error);
    } else {
      axios
        .post("http://localhost:5000/api/products", form)
        .then((res) => {
          setProducts((prev) => [...prev, res.data]);
          setShowForm(false);
        })
        .catch(console.error);
    }
  };

  return (
    <AdminLayout>
      <div style={{ paddingBottom: 30 }}>
        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#1a1a2e" }}>Products Management</h2>
            <p style={{ color: "#888", marginTop: 4 }}>Manage your product catalog ({products.length} products)</p>
          </div>
          <button
            onClick={handleAddNew}
            style={{
              padding: "12px 24px", borderRadius: 12, background: "#c40000",
              color: "#fff", border: "none", fontWeight: 700, fontSize: 15,
              cursor: "pointer", boxShadow: "0 4px 15px rgba(196,0,0,.3)"
            }}
          >
            + Add Product
          </button>
        </div>

        {/* Filters */}
        <div style={{ background: "#fff", borderRadius: 14, padding: "14px 18px", marginBottom: 20, boxShadow: "0 2px 10px rgba(0,0,0,.05)", display: "flex", gap: 12, alignItems: "center" }}>
          <input
            placeholder="🔍  Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1, padding: "10px 16px", borderRadius: 10, border: "1px solid #e0e0e0", fontSize: 15, outline: "none" }}
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid #e0e0e0", fontSize: 14, background: "#fff", cursor: "pointer", outline: "none", minWidth: 160 }}
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <span style={{ color: "#888", fontSize: 14, whiteSpace: "nowrap" }}>{filtered.length} products</span>
        </div>

        {/* Table */}
        <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 10px rgba(0,0,0,.05)", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f9fa", borderBottom: "2px solid #eee" }}>
                {["ID", "Product", "Category", "Price", "Stock", "Actions"].map((h) => (
                  <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontSize: 14, fontWeight: 700, color: "#555" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ textAlign: "center", padding: 40, color: "#888" }}>No products found</td></tr>
              ) : (
                filtered.slice(0, 50).map((p, idx) => (
                  <tr key={p.id} style={{ borderBottom: "1px solid #f0f0f0", background: idx % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: "12px 18px", color: "#888", fontSize: 13 }}>{p.id}</td>
                    <td style={{ padding: "12px 18px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        {p.image && (
                          <img src={p.image} alt={p.name} style={{ width: 42, height: 42, borderRadius: 8, objectFit: "cover", background: "#f0f0f0" }} onError={(e) => e.target.style.display = "none"} />
                        )}
                        <span style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</span>
                      </div>
                    </td>
                    <td style={{ padding: "12px 18px" }}>
                      <span style={{ background: "#fff0f0", color: "#c40000", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                        {p.category}
                      </span>
                    </td>
                    <td style={{ padding: "12px 18px", fontWeight: 700 }}>₹{Number(p.price).toLocaleString()}</td>
                    <td style={{ padding: "12px 18px" }}>
                      <span style={{
                        fontWeight: 700, fontSize: 14,
                        color: p.stock <= 5 ? "#dc2626" : p.stock <= 20 ? "#d97706" : "#16a34a"
                      }}>
                        {p.stock}
                      </span>
                    </td>
                    <td style={{ padding: "12px 18px" }}>
                      <button onClick={() => handleEdit(p)} style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid #c40000", background: "transparent", color: "#c40000", fontWeight: 600, cursor: "pointer", marginRight: 8, fontSize: 13 }}>Edit</button>
                      <button onClick={() => handleDelete(p.id)} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "#fee2e2", color: "#dc2626", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }} onClick={() => setShowForm(false)}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 32, width: 520, maxHeight: "85vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,.3)" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700 }}>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
              <button onClick={() => setShowForm(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#666" }}>✕</button>
            </div>

            {[
              { name: "name", label: "Product Name", placeholder: "e.g. Gym Shorts Pro" },
              { name: "price", label: "Price (₹)", type: "number", placeholder: "e.g. 999" },
              { name: "stock", label: "Stock Quantity", type: "number", placeholder: "e.g. 50" },
              { name: "image", label: "Image URL", placeholder: "https://..." },
              { name: "description", label: "Description", placeholder: "Product description..." },
            ].map((f) => (
              <div key={f.name} style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>{f.label}</label>
                {f.name === "description" ? (
                  <textarea name={f.name} value={form[f.name] || ""} onChange={handleChange} placeholder={f.placeholder} rows={3}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none", resize: "vertical" }} />
                ) : (
                  <input name={f.name} type={f.type || "text"} value={form[f.name] || ""} onChange={handleChange} placeholder={f.placeholder}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none" }} />
                )}
              </div>
            ))}

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>Category</label>
              <select name="category" value={form.category} onChange={handleChange}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid #ddd", fontSize: 14, outline: "none", background: "#fff" }}>
                <option value="">Select Category</option>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button onClick={() => setShowForm(false)} style={{ flex: 1, padding: "12px", borderRadius: 10, border: "1px solid #ddd", background: "#fff", fontWeight: 700, cursor: "pointer" }}>Cancel</button>
              <button onClick={handleSave} style={{ flex: 1, padding: "12px", borderRadius: 10, background: "#c40000", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer", fontSize: 15 }}>
                {editingProduct ? "Update Product" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default ProductsAdmin;
