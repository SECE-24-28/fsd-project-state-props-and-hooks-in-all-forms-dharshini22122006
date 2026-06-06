import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";

import {
  Search,
  FavoriteBorder,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

function ProductNavbar() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#B21C1C",
        px: 4,
        py: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Fab Fit
        </Typography>

        {/* Menu */}

        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Category</Button>
          <Button color="inherit">Offers</Button>
          <Button color="inherit">Contact Us</Button>
        </Box>

        {/* Search + Icons */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              borderRadius: 2,
              px: 2,
            }}
          >
            <InputBase
              placeholder="Search Products"
            />

            <Search />
          </Box>

          <IconButton color="inherit">
            <FavoriteBorder />
          </IconButton>

          <IconButton color="inherit">
            <ShoppingBagOutlined />
          </IconButton>

          <IconButton color="inherit">
            <ShoppingCartOutlined />
          </IconButton>

          <IconButton color="inherit">
            <PersonOutlineOutlined />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ProductNavbar;