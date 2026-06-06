import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Link
} from "@mui/material";

function ForgotPasswordPage() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email.trim() === "") {

      setMessage("Email address is required");
      setMessageColor("error.main");
      return;
    }

    if (!emailRegex.test(email)) {

      setMessage("Please enter a valid email address");
      setMessageColor("error.main");
      return;
    }

    setMessage("Verification code sent successfully!");
    setMessageColor("success.main");
  };

  return (

    <Box
      sx={{
        backgroundColor: "#FDF2F8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2
      }}
    >

      <Paper
        elevation={5}
        sx={{
          width: "100%",
          maxWidth: "450px",
          p: 4,
          borderRadius: "20px"
        }}
      >

        {/* Logo */}

        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "#B91C1C",
            fontWeight: "bold",
            fontStyle: "italic",
            mb: 1
          }}
        >
          Fab Fit
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Fashion For Everyone
        </Typography>

        {/* Title */}

        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Forgot Password
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Enter your registered email address to receive a verification code.
        </Typography>

        {/* Form */}

        <Box component="form" onSubmit={handleSubmit}>

          <Typography
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            Email Address
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            variant="outlined"
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: "#B91C1C",
              "&:hover": {
                backgroundColor: "#991B1B"
              }
            }}
          >
            Send Verification Code
          </Button>

        </Box>

        {/* Message */}

        {message && (

          <Typography
            align="center"
            sx={{
              mt: 2,
              fontWeight: 500,
              color: messageColor
            }}
          >
            {message}
          </Typography>

        )}

        {/* Back To Login */}

        <Box
          sx={{
            textAlign: "center",
            mt: 3
          }}
        >

          <Link
            href="/login"
            underline="hover"
            sx={{
              color: "#B91C1C",
              fontWeight: 600
            }}
          >
            Back To Login
          </Link>

        </Box>

      </Paper>

    </Box>
  );
}

export default ForgotPasswordPage;