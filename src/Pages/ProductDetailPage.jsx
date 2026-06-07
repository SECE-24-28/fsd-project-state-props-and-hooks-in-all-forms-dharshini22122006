import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Favorite, FavoriteBorder, ArrowBack } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { useToast } from "../Context/ToastContext";
import axios from "axios";

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <ProductNavbar />
        <Container sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h5">Loading product details...</Typography>
        </Container>
        <ProductFooter />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <ProductNavbar />
        <Container sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h4" mb={2}>
            Product not found
          </Typography>
          <Button variant="contained" startIcon={<ArrowBack />} onClick={() => navigate("/products")} sx={{ bgcolor: "#dc2626", "&:hover": { bgcolor: "#b91c1c" } }}>
            Back to products
          </Button>
        </Container>
        <ProductFooter />
      </>
    );
  }

  const wishlisted = isInWishlist(product.id);

  const handleWishlist = () => {
    const added = toggleWishlist(product);
    showToast(
      added ? `❤️ "${product.name}" added to Wishlist!` : `"${product.name}" removed from Wishlist`,
      added ? "success" : "info"
    );
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
    showToast(`🛒 "${product.name}" added to Cart!`, "success");
  };

  return (
    <>
      <ProductNavbar />

      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Box sx={{ flex: 1, minWidth: 320, position: "relative" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: 20, objectFit: "cover", maxHeight: 550 }}
            />
            <Tooltip title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}>
              <IconButton
                onClick={handleWishlist}
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: 2,
                  "&:hover": { bgcolor: "white" },
                }}
              >
                {wishlisted ? <Favorite sx={{ color: "#dc2626" }} /> : <FavoriteBorder sx={{ color: "#dc2626" }} />}
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flex: 1, minWidth: 320 }}>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              {product.name}
            </Typography>

            <Typography color="gray" mb={2}>
              {product.discount} • ★ {product.rating} reviews
            </Typography>

            <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, mb: 1 }}>
              <Typography variant="h4" fontWeight="bold">
                ₹{product.price}
              </Typography>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "gray",
                  fontSize: "1.2rem",
                }}
              >
                ₹{product.oldPrice}
              </Typography>
            </Box>

            <Typography mb={3} color="text.secondary">
              Discover the perfect outfit for every occasion. This premium piece is designed for comfort and style, manufactured under standard conditions.
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Available Options:
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
              <Button variant="outlined" sx={{ borderColor: "#ddd", color: "#333" }}>Size M</Button>
              <Button variant="outlined" sx={{ borderColor: "#ddd", color: "#333" }}>Size L</Button>
              <Button variant="outlined" sx={{ borderColor: "#ddd", color: "#333" }}>Color Red</Button>
            </Box>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={{ bgcolor: "#dc2626", px: 4, py: 1.5, fontWeight: "bold", "&:hover": { bgcolor: "#b91c1c" } }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                sx={{ px: 4, py: 1.5, fontWeight: "bold", color: "#dc2626", borderColor: "#dc2626", "&:hover": { borderColor: "#b91c1c", bgcolor: "rgba(220,38,38,0.04)" } }}
                onClick={() => navigate("/cart")}
              >
                View Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <ProductFooter />
    </>
  );
}

export default ProductDetailPage;
