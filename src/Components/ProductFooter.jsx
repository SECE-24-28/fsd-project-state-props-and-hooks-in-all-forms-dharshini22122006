import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function ProductFooter() {
  return (
    <Box
      sx={{
        backgroundColor: "#d50000",
        color: "#fff",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} justifyContent="space-between">

          {/* Logo */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: 50,
                fontStyle: "italic",
                mb: 1,
              }}
            >
              Fab Fit
            </Typography>
            <Typography sx={{ fontSize: "1.3rem" }}>
              Fashion For Everyone
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            <Link to="/" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>Home</Link>
            <Link to="/products" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>Products</Link>
            <Link to="/about" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>About Us</Link>
            <Link to="/orders" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>My Orders</Link>
          </Grid>

          {/* Account */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Account
            </Typography>
            <Link to="/login" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>Login</Link>
            <Link to="/signup" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>Sign Up</Link>
            <Link to="/cart" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>Cart</Link>
          </Grid>

          {/* Legal */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Legal
            </Typography>
            <Link to="/faq" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>FAQ</Link>
            <Link to="/privacy-policy" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>Privacy Policy</Link>
            <Link to="/terms-conditions" style={{ color: "#fff", textDecoration: "none", display: "block", marginBottom: "8px", opacity: 0.85 }}>Terms & Conditions</Link>
          </Grid>

        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 6,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", fontWeight: 500 }}>
            © 2026 Fab Fit. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ProductFooter;