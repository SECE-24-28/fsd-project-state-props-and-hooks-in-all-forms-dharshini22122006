import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


import CartItem from "./CartItem";
import { useCart } from "../../Context/CartContext";

function CartTable({ items = [] }) {
  const safeItems = Array.isArray(items) ? items : [];
  const { clearCart } = useCart();

  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #eee",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "2.2fr 1fr 1fr 0.8fr 50px",
          p: 3,
          bgcolor: "#fafafa",
          borderBottom: "1px solid #eee",
          fontWeight: "bold",
        }}
      >
        <Typography fontWeight="bold">
          PRODUCT
        </Typography>

        <Typography fontWeight="bold">
          PRICE
        </Typography>

        <Typography fontWeight="bold">
          QUANTITY
        </Typography>

        <Typography fontWeight="bold">
          TOTAL
        </Typography>
      </Box>

      {/* Products */}
      {safeItems.length > 0 ? (
        safeItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))
      ) : (
        <Box sx={{ p: 3 }}>
          <Typography color="text.secondary">
            Your cart is currently empty.
          </Typography>
        </Box>
      )}

      {/* Footer */}
      <Box
        sx={{
          p: 3,
        }}
      >
        <Button
          startIcon={<DeleteIcon  />}
          color="error"
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      </Box>
    </Paper>
  );
}

export default CartTable;