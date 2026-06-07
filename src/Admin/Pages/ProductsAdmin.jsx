import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

function ProductsAdmin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products from backend (or fallback to local mock)
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(() => {
        // Fallback: load static mock if API not reachable
        import("../Data/products").then(m => setProducts(m.default));
      });
  }, []);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, categoryFilter]);

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category));
    return Array.from(set);
  }, [products]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "price", headerName: "Price", width: 100, valueFormatter: params => `₹${params.value}` },
    { field: "stock", headerName: "Stock", width: 80 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: params => (
        <>
          <Button size="small" onClick={() => handleEdit(params.row)} startIcon={<EditIcon />}>Edit</Button>
          <Button size="small" color="error" onClick={() => handleDelete(params.row.id)} startIcon={<DeleteIcon />}>Del</Button>
        </>
      )
    }
  ];

  const handleEdit = (product) => {
    setEditingProduct(product);
    setEditDialogOpen(true);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => setProducts(prev => prev.filter(p => p.id !== id)))
      .catch(err => console.error(err));
  };

  const handleSave = () => {
    const { id, name, category, price, stock } = editingProduct;
    axios.put(`http://localhost:5000/api/products/${id}`, { name, category, price, stock })
      .then(res => {
        setProducts(prev => prev.map(p => (p.id === id ? res.data : p)));
        setEditDialogOpen(false);
      })
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ height: "calc(100vh - 120px)", width: "100%", padding: 24 }}>
      <h2>Admin – Products Management</h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
        <TextField label="Search" variant="outlined" size="small" value={search} onChange={e => setSearch(e.target.value)} />
        <TextField
          select
          label="Category"
          variant="outlined"
          size="small"
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          style={{ minWidth: 150 }}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map(cat => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={() => navigate("/admin")}>Back to Dashboard</Button>
      </div>
      <DataGrid rows={filtered} columns={columns} pageSize={10} rowsPerPageOptions={[10, 20, 50]} />

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent dividers>
          {editingProduct && (
            <>
              <TextField margin="dense" label="Name" name="name" fullWidth value={editingProduct.name} onChange={handleChange} />
              <TextField margin="dense" label="Category" name="category" fullWidth value={editingProduct.category} onChange={handleChange} />
              <TextField margin="dense" label="Price" name="price" type="number" fullWidth value={editingProduct.price} onChange={handleChange} />
              <TextField margin="dense" label="Stock" name="stock" type="number" fullWidth value={editingProduct.stock} onChange={handleChange} />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" startIcon={<SaveIcon />} onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProductsAdmin;
