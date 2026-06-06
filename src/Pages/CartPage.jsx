import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";

import CartTable from "../Components/Cart/CartTable";
import OrderSummary from "../Components/Cart/OrderSummary";

import cartData from "../Data/cartData";

function CartPage() {
  return (
    <>
      <ProductNavbar />

      <Container
        maxWidth="xl"
        sx={{ py: 5 }}
      >
        {/* Breadcrumb */}
        <Typography
          color="text.secondary"
          mb={3}
        >
          Home &gt; Cart
        </Typography>

        {/* Heading */}
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={4}
        >
          Shopping Cart
          <span
            style={{
              color: "#dc2626",
              fontSize: "24px",
              marginLeft: "10px",
            }}
          >
            (2 Items)
          </span>
        </Typography>

        <Box
          display="flex"
          justifyContent="flex-end"
          mb={3}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            variant="contained"
            sx={{
              bgcolor: "#dc2626",
            }}
          >
            Continue Shopping
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "2fr 0.75fr",
            gap: "30px",
          }}
        >
          <CartTable
            items={cartData}
          />

          <OrderSummary />
        </Box>
      </Container>

      <ProductFooter />
    </>
  );
}

export default CartPage;