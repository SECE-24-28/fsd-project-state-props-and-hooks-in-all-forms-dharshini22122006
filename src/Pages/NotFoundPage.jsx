import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <ProductNavbar />
      <Box
        sx={{
          bgcolor: "#fdf2f8",
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "6rem", md: "10rem" },
              fontWeight: 900,
              color: "#dc2626",
              lineHeight: 1,
              mb: 2,
              letterSpacing: -2,
            }}
          >
            404
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
            Oops! Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, px: 2 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
          </Typography>
          <Button
            variant="contained"
            startIcon={<Home />}
            sx={{
              bgcolor: "#dc2626",
              "&:hover": { bgcolor: "#b91c1c" },
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(220, 38, 38, 0.3)",
            }}
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Container>
      </Box>
      <ProductFooter />
    </>
  );
}

export default NotFoundPage;
