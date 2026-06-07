import React, { useState } from "react";
import {
  AppBar, Toolbar, Typography, Box, InputBase,
  IconButton, Button, Badge, Avatar, Tooltip, Menu, MenuItem,
} from "@mui/material";
import {
  Search, Favorite, FavoriteBorder, ShoppingBagOutlined,
  ShoppingCartOutlined, PersonOutlineOutlined, LogoutOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useToast } from "../Context/ToastContext";

function ProductNavbar() {
  const navigate = useNavigate();
  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { showToast } = useToast();

  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const isLoggedIn = !!localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const firstName = user?.firstname || "";

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setAnchorEl(null);
    showToast("Logged out successfully!", "info");
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ background: "#B21C1C", px: 4, py: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Logo */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontStyle: "italic", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Fab Fit
        </Typography>

        {/* Menu Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
          <Button color="inherit" onClick={() => navigate("/products")}>Products</Button>
          <Button color="inherit" onClick={() => navigate("/faq")}>FAQ</Button>
        </Box>

        {/* Search + Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>

          {/* Search */}
          <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#fff", borderRadius: 2, px: 1.5 }}>
            <InputBase
              placeholder="Search Products…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              sx={{ color: "#333", fontSize: "0.9rem", width: 160 }}
            />
            <Search sx={{ color: "#888", fontSize: 20 }} />
          </Box>

          {/* Wishlist */}
          <Tooltip title="Wishlist">
            <IconButton color="inherit" onClick={() => navigate("/wishlist")}>
              <Badge badgeContent={wishlistCount || 0} color="warning">
                {wishlistCount > 0 ? <Favorite sx={{ color: "#FFD700" }} /> : <FavoriteBorder />}
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Orders */}
          <Tooltip title="My Orders">
            <IconButton color="inherit" onClick={() => navigate("/orders")}>
              <ShoppingBagOutlined />
            </IconButton>
          </Tooltip>

          {/* Cart */}
          <Tooltip title="Cart">
            <IconButton color="inherit" onClick={() => navigate("/cart")}>
              <Badge badgeContent={count} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* User / Logout */}
          {isLoggedIn ? (
            <>
              <Tooltip title={`Hi, ${firstName}!`}>
                <Avatar
                  sx={{ bgcolor: "#fff", color: "#B21C1C", width: 34, height: 34, fontWeight: "bold", fontSize: "0.9rem", cursor: "pointer" }}
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  {firstName.charAt(0).toUpperCase()}
                </Avatar>
              </Tooltip>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem disabled>
                  <Typography variant="body2" fontWeight="bold">Hi, {firstName}!</Typography>
                </MenuItem>
                <MenuItem onClick={() => { setAnchorEl(null); navigate("/orders"); }}>
                  <ShoppingBagOutlined sx={{ mr: 1, fontSize: 18 }} /> My Orders
                </MenuItem>
                <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
                  <LogoutOutlined sx={{ mr: 1, fontSize: 18 }} /> Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Tooltip title="Login">
              <IconButton color="inherit" onClick={() => navigate("/login")}>
                <PersonOutlineOutlined />
              </IconButton>
            </Tooltip>
          )}

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ProductNavbar;