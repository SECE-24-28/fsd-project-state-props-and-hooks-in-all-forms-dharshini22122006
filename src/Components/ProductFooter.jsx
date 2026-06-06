import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

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
        <Grid
          container
          spacing={6}
          justifyContent="space-between"
        >
          {/* Logo */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize:50,
                fontStyle:"italic",
                mb: 1,
              }}
            >
              Fab Fit
            </Typography>

            <Typography
              sx={{
                fontSize: "1.3rem",
              }}
            >
              Fashion For Everyone
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              Quick Links
            </Typography>

            <Typography mb={1}>Home</Typography>
            <Typography mb={1}>Category</Typography>
            <Typography mb={1}>About</Typography>
            <Typography>Contact Us</Typography>
          </Grid>

          {/* Group Companies */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              Group Companies
            </Typography>

            <Typography>BODEGA</Typography>
          </Grid>

          {/* Legal */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
            >
              Legal
            </Typography>

            <Typography mb={1}>FAQ</Typography>
            <Typography mb={1}>Privacy Policy</Typography>
            <Typography mb={1}>Terms & Conditions</Typography>
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
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 500,
            }}
          >
            © 2026 Fab Fit. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ProductFooter;