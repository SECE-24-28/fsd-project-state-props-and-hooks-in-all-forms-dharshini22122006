 import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

function AboutPage() {
  return (
    <Box sx={{ bgcolor: "#fdf2f8", minHeight: "100vh" }}>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#B91C1C",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          About <span style={{ fontStyle: "italic" }}>Fab Fit</span>
        </Typography>

        <Typography variant="h6" mt={2}>
          Fashion For Everyone
        </Typography>
      </Box>

      {/* About Content */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="Fashion"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 4,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="#B91C1C"
              gutterBottom
            >
              Who We Are
            </Typography>

            <Typography color="text.secondary" lineHeight={2}>
              <span style={{ fontStyle: "italic" }}>Fab Fit</span> is an
              online fashion store dedicated to bringing stylish,
              comfortable, and affordable clothing for Women, Men,
              and Kids.
            </Typography>

            <Typography
              color="text.secondary"
              lineHeight={2}
              mt={2}
            >
              Our goal is to make fashion accessible to everyone by
              offering quality products, exciting deals, and a smooth
              shopping experience.
            </Typography>
          </Grid>

        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: "white", py: 8 }}>
        <Container>

          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="#B91C1C"
            mb={6}
          >
            Why Choose <span style={{ fontStyle: "italic" }}>Fab Fit</span>?
          </Typography>

          <Grid container spacing={3}>

            {[
              {
                title: "Best Prices",
                desc: "Affordable fashion for everyone.",
              },
              {
                title: "Premium Quality",
                desc: "Comfortable and durable fabrics.",
              },
              {
                title: "Fast Delivery",
                desc: "Quick shipping across India.",
              },
              {
                title: "Easy Returns",
                desc: "Hassle-free return policy.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Card
                  sx={{
                    bgcolor: "#fdf2f8",
                    borderRadius: 3,
                    textAlign: "center",
                    height: "100%",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>

                    <Typography color="text.secondary">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

          </Grid>

        </Container>
      </Box>

      {/* Mission */}
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color="#B91C1C"
          gutterBottom
        >
          Our Mission
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          maxWidth="700px"
          mx="auto"
          lineHeight={2}
        >
          To inspire confidence through fashion by providing trendy,
          affordable, and high-quality clothing that helps every
          customer look and feel their best.
        </Typography>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          bgcolor: "#B91C1C",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontStyle: "italic" }}
        >
          Fab Fit
        </Typography>

        <Typography mt={1}>
          Fashion For Everyone
        </Typography>

        <Typography mt={2} variant="body2">
          © 2026 Fab Fit. All Rights Reserved.
        </Typography>
      </Box>

    </Box>
  );
}

export default AboutPage;
     