import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "../../Context/ToastContext";

function OrderSummary() {
  const { subtotal, discount, shipping, total, count, cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleCheckout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      showToast("Please login to proceed with checkout.", "warning");
      navigate("/login");
      return;
    }

    const orderItems = cart.map(item => ({
      productId: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image
    }));

    axios.post("http://localhost:5000/api/orders", {
      items: orderItems,
      subtotal,
      discount,
      shipping,
      total,
      shippingAddress: {
        street: "123 Main St",
        city: "Mumbai",
        state: "Maharashtra",
        zipCode: "400001"
      }
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      showToast("🎉 Order Placed Successfully! Thank you for shopping with Fab Fit.", "success");
      clearCart();
      navigate("/orders");
    })
    .catch(err => {
      showToast(err.response?.data?.message || "Checkout failed", "error");
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #eee",
        borderRadius: "16px",
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Order Summary
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <Typography>
          Subtotal ({count} Items)
        </Typography>

        <Typography>
          ₹{subtotal}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <Typography>
          Discount
        </Typography>

        <Typography color="green">
          -₹{discount}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <Typography>
          Shipping
        </Typography>

        <Typography>
          ₹{shipping}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box
        display="flex"
        justifyContent="space-between"
        mb={3}
      >
        <Typography
          fontWeight="bold"
          fontSize={24}
        >
          Total Amount
        </Typography>

        <Typography
          fontWeight="bold"
          fontSize={30}
          color="#dc2626"
        >
          ₹{total}
        </Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        startIcon={<LockIcon />}
        sx={{
          bgcolor: "#dc2626",
          py: 1.5,
          mb: 4,
        }}
        disabled={count === 0}
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <Typography>
          Secure Payment
        </Typography>

        <Typography>
          Easy Returns
        </Typography>

        <Typography>
          24/7 Support
        </Typography>
      </Box>
    </Paper>
  );
}

export default OrderSummary;