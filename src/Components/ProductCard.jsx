import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 350,
          objectFit: "cover",
        }}
      />

      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            mb: 2,
          }}
        >
          {product.name}
        </Typography>

        <Box mb={2}>
          <Typography
            component="span"
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            ₹{product.price}
          </Typography>

          <Typography
            component="span"
            sx={{
              textDecoration: "line-through",
              color: "gray",
              ml: 1,
            }}
          >
            ₹{product.oldPrice}
          </Typography>

          <Typography
            component="span"
            color="error"
            sx={{ ml: 1 }}
          >
            {product.discount}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Button
            variant="outlined"
            color="error"
          >
            Add To Cart
          </Button>

          <Typography
            sx={{
              color: "#f4b400",
            }}
          >
            ★★★★☆ ({product.rating})
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#dc2626",
            "&:hover": {
              bgcolor: "#b91c1c",
            },
          }}
        >
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;