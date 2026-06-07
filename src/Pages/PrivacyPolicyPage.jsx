import React from "react";
import { Container, Typography, Box, Grid, Paper, Divider } from "@mui/material";
import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";

function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We may collect customer details including names, phone numbers, addresses, emails and payment-related information during account registration and order processing."
    },
    {
      title: "How Information Is Used",
      content: "Information collected is used for order fulfillment, delivery management, customer support, communication and service improvement."
    },
    {
      title: "Payment Security",
      content: "All online payments are processed securely through trusted payment gateways with encrypted transaction protection."
    },
    {
      title: "Data Protection",
      content: "FAB FIT implements appropriate technical and organizational measures to safeguard customer data against unauthorized access or misuse."
    },
    {
      title: "Cookies & Analytics",
      content: "We may use cookies and analytics tools to improve user experience, website functionality and personalized shopping."
    },
    {
      title: "Policy Updates",
      content: "FAB FIT reserves the right to update this Privacy Policy whenever necessary. Changes will be reflected on this page."
    }
  ];

  return (
    <>
      <ProductNavbar />
      <Container maxWidth="lg" sx={{ py: 8, minHeight: "75vh" }}>
        <Paper elevation={3} sx={{ borderRadius: "30px", overflow: "hidden", border: "1px solid #eee" }}>
          <Grid container>
            {/* Left side banner */}
            <Grid item xs={12} md={5} sx={{ bgcolor: "#b91c1c", color: "white", p: 6, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: { xs: "auto", md: "500px" } }}>
              <Box>
                <Typography variant="h3" fontWeight="black" fontStyle="italic" mb={1}>
                  FAB FIT
                </Typography>
                <Typography variant="subtitle2" color="red.100">
                  Fashion that fits your style
                </Typography>
              </Box>
              <Box sx={{ mt: 6 }}>
                <Typography variant="h3" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                  Privacy <br /> Policy
                </Typography>
                <Typography variant="body1" sx={{ mt: 3, opacity: 0.9, lineHeight: 1.6 }}>
                  We value your privacy and are committed to protecting your personal information while providing secure shopping services.
                </Typography>
              </Box>
            </Grid>

            {/* Right side policy content */}
            <Grid item xs={12} md={7} sx={{ p: 6, maxHeight: "600px", overflowY: "auto", bgcolor: "#fafafa" }}>
              {sections.map((section, idx) => (
                <Box key={idx} sx={{ mb: idx !== sections.length - 1 ? 5 : 0 }}>
                  <Typography variant="h5" color="#b91c1c" fontWeight="bold" mb={2}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {section.content}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ProductFooter />
    </>
  );
}

export default PrivacyPolicyPage;
