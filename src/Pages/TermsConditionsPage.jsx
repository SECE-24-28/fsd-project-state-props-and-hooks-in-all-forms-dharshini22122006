import React from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";

function TermsConditionsPage() {
  return (
    <>
      <ProductNavbar />
      <Container maxWidth="md" sx={{ py: 8, minHeight: "75vh" }}>
        <Paper elevation={3} sx={{ p: 5, borderRadius: "15px", border: "1px solid #eee" }}>
          {/* Logo */}
          <Typography variant="h3" fontWeight="black" fontStyle="italic" color="#e60012" mb={1}>
            Fab Fit
          </Typography>
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Terms & Conditions
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            Welcome to FAB FIT. By accessing and using our website, you agree to follow the terms and conditions mentioned below.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 1 */}
          <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
            1. Account Registration
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            Users must provide accurate information while creating an account. You are responsible for maintaining the confidentiality of your login details.
          </Typography>

          {/* Section 2 */}
          <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
            2. Orders & Payments
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            All orders placed on FAB FIT are subject to availability and confirmation. Payments can be made through secure payment methods available on the website.
          </Typography>

          {/* Section 3 */}
          <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
            3. Shipping & Delivery
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            Delivery times may vary depending on location and product availability. FAB FIT is not responsible for delays caused by courier services.
          </Typography>

          {/* Section 4 */}
          <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
            4. Returns & Refunds
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            Customers can request returns within 7 days of delivery for eligible products. Refunds will be processed after product verification.
          </Typography>

          {/* Section 5 */}
          <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
            5. User Responsibilities
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3, color: "text.secondary", lineHeight: 1.7 }}>
            <li>
              <Typography variant="body1" color="text.secondary">Do not misuse the website.</Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">Do not provide false information.</Typography>
            </li>
            <li>
              <Typography variant="body1" color="text.secondary">Respect copyright and intellectual property.</Typography>
            </li>
          </Box>

          {/* Section 6 */}
          <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
            6. Privacy Policy
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            FAB FIT values your privacy and protects your personal information using secure technologies.
          </Typography>

          {/* Section 7 */}
          <Typography variant="h6" fontWeight="bold" mt={4} mb={1}>
            7. Changes to Terms
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
            FAB FIT reserves the right to update or modify these terms at any time without prior notice.
          </Typography>

          <Typography variant="body2" color="text.secondary" align="center" mt={6}>
            © 2026 FAB FIT. All Rights Reserved.
          </Typography>
        </Paper>
      </Container>
      <ProductFooter />
    </>
  );
}

export default TermsConditionsPage;
