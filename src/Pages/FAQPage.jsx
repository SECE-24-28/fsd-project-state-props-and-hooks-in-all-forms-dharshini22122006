import React from "react";
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductNavbar from "../Components/ProductNavbar";
import ProductFooter from "../Components/ProductFooter";

function FAQPage() {
  const faqs = [
    {
      question: "How do I create an account on FAB FIT?",
      answer: "Click on “Create Account” and enter your details like name, email, and password to register on FAB FIT."
    },
    {
      question: "Can I shop without creating an account?",
      answer: "Yes, you can browse products without signing in, but an account is needed to place orders."
    },
    {
      question: "How can I reset my password?",
      answer: "Click on “Forgot Password?” on the login page and follow the instructions sent to your registered email."
    },
    {
      question: "What payment methods are accepted?",
      answer: "FAB FIT accepts Credit Cards, Debit Cards, UPI, Net Banking, and Cash on Delivery."
    },
    {
      question: "How long does delivery take?",
      answer: "Orders are usually delivered within 3–7 business days depending on your location."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, you can track your order through the “My Orders” section after placing your order."
    },
    {
      question: "Does FAB FIT offer free shipping?",
      answer: "Yes, free shipping is available on selected orders and promotional offers."
    },
    {
      question: "What is your return policy?",
      answer: "Products can be returned within 7 days of delivery if they are unused and in original condition."
    },
    {
      question: "How do I cancel an order?",
      answer: "You can cancel your order from the “My Orders” section before the item is shipped."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact FAB FIT support through email, live chat, or customer care services."
    }
  ];

  return (
    <>
      <ProductNavbar />
      <Container maxWidth="md" sx={{ py: 8, minHeight: "70vh" }}>
        <Typography variant="h3" component="h1" fontWeight="black" fontStyle="italic" color="#dc2626" mb={1}>
          Fab Fit
        </Typography>
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Frequently Asked Questions (FAQ)
        </Typography>

        <Box sx={{ mt: 2 }}>
          {faqs.map((faq, index) => (
            <Accordion key={index} sx={{ borderBottom: "1px solid #eee", boxShadow: "none", "&:before": { display: "none" } }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0 }}>
                <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pb: 2 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <ProductFooter />
    </>
  );
}

export default FAQPage;
