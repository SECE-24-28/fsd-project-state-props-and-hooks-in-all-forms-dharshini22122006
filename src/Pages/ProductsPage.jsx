import React, { useMemo, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";
import ProductCard from "../Components/ProductCard";

import heroBg from "../Assets/Images/bgboygirlpropage.png";
import { useLocation } from "react-router-dom";
import localProducts from "../Data/products";

const categories = ["All", "Men", "Women", "Kids"];

function ProductsPage() {
  const productsList = localProducts;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popularity");
  const location = useLocation();

  // Sync query with URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search");
    setQuery(searchQuery || "");
  }, [location.search]);



  const visibleProducts = useMemo(() => {
    return productsList
      .filter((product) => {
        const matchesCategory =
          category === "All" || product.category === category;
        const matchesSearch = product.name
          .toLowerCase()
          .includes(query.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "Low") return a.price - b.price;
        if (sortBy === "High") return b.price - a.price;
        return b.rating - a.rating;
      });
  }, [productsList, category, query, sortBy]);
  return (
    <>
      <ProductNavbar />

      {/* Hero Banner */}
      <Container maxWidth={false} sx={{ mt: 4 }}>
        <Box
          sx={{
            height: "400px",
            borderRadius: "30px",
            overflow: "hidden",
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            pl: 10,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#dc2626",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Explore The Latest Collection
            </Typography>

            <Typography variant="h3" fontWeight="bold" mt={2}>
              Trendy Styles For
              <br />
              Every Occasion
            </Typography>

            <Typography mt={2}>
              Find your perfect look from our wide range of fashion.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: "#dc2626",
              }}
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Breadcrumb */}
      <Container maxWidth={false} sx={{ mt: 3 }}>
        <Typography color="gray">
          Home &gt; <span style={{ color: "#dc2626", fontWeight: 600, marginLeft: "10px" }}>Products</span>
        </Typography>
      </Container>

      {/* Product Section */}
      <Container maxWidth={false} sx={{ mt: 4, mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            All Products
          </Typography>


          <TextField
            size="small"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products"
            sx={{ minWidth: 240 }}
          />
          <Select
            defaultValue="Popularity"
            size="small"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <MenuItem value="Popularity">Popularity</MenuItem>

            <MenuItem value="Low">Price Low to High</MenuItem>

            <MenuItem value="High">Price High to Low</MenuItem>
          </Select>
        </Box>

        {/* Categories */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 5,
            flexWrap: "wrap",
          }}
        >
          {categories.map((group) => (
            <Button
              key={group}
              variant={category === group ? "contained" : "outlined"}
              color={category === group ? "error" : "inherit"}
              onClick={() => setCategory(group)}
            >
              {group}
            </Button>
          ))}

          <Button variant="outlined" disabled sx={{ cursor: "default", opacity: 0.5 }}>
            Shirts
          </Button>
        </Box>

        {/* Products Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
          }}
        >
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Container>

      <ProductFooter />
    </>
  );
}

export default ProductsPage;