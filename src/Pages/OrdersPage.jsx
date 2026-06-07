import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button, Paper, Grid, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";
import ordersMock from "../Data/orders";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    axios
      .get("http://localhost:5000/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching orders:", err);
        setOrders(ordersMock);
        setLoading(false);
      });
  }, [token]);

  if (!token) {
    return (
      <>
        <ProductNavbar />
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2, ml: 2 }}>
          <Button variant="outlined" onClick={() => navigate('/')}>Back to Home</Button>
        </Box>
        <Container sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h5" mb={3}>Please login to view your orders.</Typography>
          <Button variant="contained" onClick={() => navigate('/login')} sx={{ bgcolor: "#dc2626" }}>Login Now</Button>
        </Container>
        <ProductFooter />
      </>
    );
  }

  return (
    <>
      <ProductNavbar />
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2, ml: 2 }}>
        <Button variant="outlined" onClick={() => navigate('/')}>Back to Home</Button>
      </Box>
      <Container sx={{ py: 6, minHeight: "60vh" }}>
        <Typography variant="h4" mb={4} fontWeight="bold">Your Orders</Typography>
        {loading ? (
          <Typography>Loading orders...</Typography>
        ) : orders.length === 0 ? (
          <Box>
            <Typography color="text.secondary">You have no orders yet.</Typography>
            <Button sx={{ mt: 3, bgcolor: "#dc2626" }} variant="contained" onClick={() => navigate('/products')}>Shop Now</Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {orders.map(order => (
              <Paper key={order._id} elevation={0} sx={{ border: "1px solid #eee", borderRadius: "16px", p: 3 }}>
                <Grid container spacing={2} justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">Order ID: {order._id}</Typography>
                    <Typography variant="body2" color="text.secondary">Placed on: {new Date(order.createdAt).toLocaleDateString()}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} textAlign={{ xs: "left", sm: "right" }}>
                    <Typography variant="h6" fontWeight="bold">Total: ₹{order.total}</Typography>
                    <Typography variant="subtitle2" sx={{ color: order.status === "Delivered" ? "green" : order.status === "Shipped" ? "orange" : "red", fontWeight: "bold" }}>Status: {order.status}</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {order.items.map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <img src={item.image} alt={item.name} style={{ width: 60, height: 60, borderRadius: 8, objectFit: "cover" }} />
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography fontWeight="semibold">{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary">Quantity: {item.quantity} | Price: ₹{item.price}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        )}
      </Container>
      <ProductFooter />
    </>
  );
}

export default OrdersPage;
