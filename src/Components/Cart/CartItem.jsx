import React from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

function CartItem({ item }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns:
          "2.2fr 1fr 1fr 0.8fr 50px",
        alignItems: "center",
        gap: 3,
        py: 3,
        borderBottom: "1px solid #eee",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            objectFit: "cover",
          }}
        />

        <Box>
          <Typography
            fontWeight={700}
            fontSize={20}
          >
            {item.name}
          </Typography>

          <Typography color="text.secondary">
            Size: {item.size} | Color: {item.color}
          </Typography>

          <Typography color="green">
            In Stock
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography fontWeight="bold">
          ₹{item.price}
        </Typography>

        <Typography
          sx={{
            textDecoration: "line-through",
            color: "gray",
          }}
        >
          ₹{item.oldPrice}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ddd",
          borderRadius: "10px",
          width: "120px",
          justifyContent: "space-between",
          px: 1,
        }}
      >
        <IconButton size="small">
          <RemoveIcon />
        </IconButton>

        <Typography>
          {item.quantity}
        </Typography>

        <IconButton size="small">
          <AddIcon />
        </IconButton>
      </Box>

      <Typography fontWeight="bold">
        ₹{item.price}
      </Typography>

      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default CartItem;