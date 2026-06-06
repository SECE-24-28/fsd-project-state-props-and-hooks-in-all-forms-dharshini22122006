import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";
import ProductCard from "../Components/ProductCard";

import products from "../Data/products";
import heroBg from "../Assets/Images/bgboygirlpropage.png";

function ProductsPage() {
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

            <Typography
              variant="h3"
              fontWeight="bold"
              mt={2}
            >
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
          Home &gt;
          <span
            style={{
              color: "#dc2626",
              fontWeight: 600,
              marginLeft: "10px",
            }}
          >
            Products
          </span>
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
          <Typography
            variant="h3"
            fontWeight="bold"
          >
            All Products
          </Typography>

          <Select
            defaultValue="Popularity"
            size="small"
          >
            <MenuItem value="Popularity">
              Popularity
            </MenuItem>

            <MenuItem value="Low">
              Price Low to High
            </MenuItem>

            <MenuItem value="High">
              Price High to Low
            </MenuItem>
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
          <Button
            variant="contained"
            color="error"
          >
            All
          </Button>

          <Button variant="outlined">
            Men
          </Button>

          <Button variant="outlined">
            Women
          </Button>

          <Button variant="outlined">
            Kids
          </Button>

          <Button variant="outlined">
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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </Box>
      </Container>

      <ProductFooter />
    </>
  );
}

export default ProductsPage;