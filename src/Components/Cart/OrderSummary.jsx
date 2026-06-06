import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";

function OrderSummary() {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid #eee",
        borderRadius: "16px",
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Order Summary
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <Typography>
          Subtotal (2 Items)
        </Typography>

        <Typography>
          ₹2798
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <Typography>
          Discount
        </Typography>

        <Typography color="green">
          -₹1400
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        mb={2}
      >
        <Typography>
          Shipping
        </Typography>

        <Typography>
          ₹0
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box
        display="flex"
        justifyContent="space-between"
        mb={3}
      >
        <Typography
          fontWeight="bold"
          fontSize={24}
        >
          Total Amount
        </Typography>

        <Typography
          fontWeight="bold"
          fontSize={30}
          color="#dc2626"
        >
          ₹1398
        </Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        startIcon={<LockIcon />}
        sx={{
          bgcolor: "#dc2626",
          py: 1.5,
          mb: 4,
        }}
      >
        Proceed to Checkout
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <Typography>
          Secure Payment
        </Typography>

        <Typography>
          Easy Returns
        </Typography>

        <Typography>
          24/7 Support
        </Typography>
      </Box>
    </Paper>
  );
}

export default OrderSummary;