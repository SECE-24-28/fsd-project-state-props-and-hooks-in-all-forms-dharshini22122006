// src/Components/HomePage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";
import heroBg from "../Assets/Images/backgroundgirlhomepage.png";
import womenImg from "../Assets/Images/women.png";
import menImg from "../Assets/Images/men.png";
import kidImg from "../Assets/Images/kid.png";
import "./HomePage.css";
import localProducts from "../Data/products";
import ProductCard from "./ProductCard";

function HomePage() {
  const navigate = useNavigate();
  // Filter 4 diverse featured products for the trending section
  const trendingProducts = localProducts.filter(product => [8, 42, 43, 125].includes(product.id));
  return (
    <>
      {/* Navbar */}
      <ProductNavbar />

      {/* Hero Section */}
      <div className="container">
        <div className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="hero-content">
            <h6>LIMITED TIME ONLY</h6>
            <h2>FLAT</h2>
            <h1>50% OFF</h1>
            <h3>Summer Sale</h3>
            <p>Fresh styles. Cool looks. Hot offers.</p>
            <Link to="/products">
              <button>
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container">
        <h2 className="section-title">Categories</h2>
        <div className="category-row">
          <div className="category-card">
            <img src={womenImg} alt="Women" />
            <div>
              <h4>Women</h4>
              <Link to="/products?category=Women">Explore Now →</Link>
            </div>
          </div>
          <div className="category-card">
            <img src={menImg} alt="Men" />
            <div>
              <h4>Men</h4>
              <Link to="/products?category=Men">Explore Now →</Link>
            </div>
          </div>
          <div className="category-card">
            <img src={kidImg} alt="Kids" />
            <div>
              <h4>Kids</h4>
              <Link to="/products?category=Kids">Explore Now →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="container">
        <h2 className="section-title">Trending Products</h2>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: "30px",
          }}
        >
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </div>

      {/* Quick Access Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, my: 4 }}>
        <Button variant="outlined" onClick={() => navigate('/orders')}>View My Orders</Button>
        <Button variant="outlined" onClick={() => navigate('/wishlist')}>View My Wishlist</Button>
      </Box>

      {/* Why Shop */}
      <div className="container why-shop">
        <h2>Why Shop With <span style={{ fontStyle: "italic" }}>Fab Fit</span>?</h2>
        <div className="why-row">
          <div className="why-item"><i className="bi bi-tags" /> <h5>Best Prices</h5></div>
          <div className="why-item"><i className="bi bi-box-seam" /> <h5>Perfect Packing</h5></div>
          <div className="why-item"><i className="bi bi-truck" /> <h5>Fast Delivery</h5></div>
          <div className="why-item"><i className="bi bi-shield-check" /> <h5>Secure Payment</h5></div>
          <div className="why-item"><i className="bi bi-arrow-repeat" /> <h5>Easy Return</h5></div>
          <div className="why-item"><i className="bi bi-patch-check" /> <h5>Premium Quality</h5></div>
        </div>
      </div>

      {/* Footer */}
      <ProductFooter />
    </>
  );
}

export default HomePage;