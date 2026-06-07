import React from "react";
import {
  Card, CardMedia, CardContent, Typography, Button, Box, IconButton, Tooltip,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useToast } from "../Context/ToastContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const wishlisted = isInWishlist(product.id);

  const handleWishlist = (e) => {
    e.stopPropagation();
    const added = toggleWishlist(product);
    showToast(
      added ? `❤️ "${product.name}" added to Wishlist!` : `"${product.name}" removed from Wishlist`,
      added ? "success" : "info"
    );
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`🛒 "${product.name}" added to Cart!`, "success");
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`🚀 "${product.name}" purchased!`, "success");
    navigate('/cart');
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        overflow: "hidden",
        transition: "box-shadow 0.25s, transform 0.25s",
        "&:hover": { boxShadow: 8, transform: "translateY(-4px)", cursor: "pointer" },
        position: "relative",
      }}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Wishlist Heart */}
      <Tooltip title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}>
        <IconButton
          onClick={handleWishlist}
          sx={{
            position: "absolute", top: 10, right: 10, zIndex: 2,
            bgcolor: "rgba(255,255,255,0.85)", backdropFilter: "blur(4px)",
            "&:hover": { bgcolor: "white" },
          }}
        >
          {wishlisted ? <Favorite sx={{ color: "#dc2626" }} /> : <FavoriteBorder sx={{ color: "#dc2626" }} />}
        </IconButton>
      </Tooltip>

      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ height: 300, objectFit: "cover" }}
      />

      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight={600} mb={1} noWrap>
          {product.name}
        </Typography>

        <Box mb={2} display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <Typography fontWeight="bold" fontSize="1.5rem">
            ₹{product.price}
          </Typography>
          <Typography sx={{ textDecoration: "line-through", color: "gray", fontSize: "0.9rem" }}>
            ₹{product.oldPrice}
          </Typography>
          <Typography color="error" fontWeight="bold" fontSize="0.85rem">
            {product.discount}
          </Typography>
        </Box>

        <Typography sx={{ color: "#f4b400", mb: 2, fontSize: "0.9rem" }}>
          ★★★★☆ ({product.rating})
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ flex: 1 }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ flex: 1, bgcolor: "#dc2626", "&:hover": { bgcolor: "#b91c1c" } }}
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;