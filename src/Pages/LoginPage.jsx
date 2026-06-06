import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";


function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loginUser = () => {

    setEmailError("");
    setPasswordError("");

    let valid = true;

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    const passwordRegex =
      /^.{6,}$/;

    if (email.trim() === "") {

      setEmailError("Email is required");
      valid = false;

    } else if (!emailRegex.test(email)) {

      setEmailError(
        "Please enter a valid Gmail address"
      );

      valid = false;
    }

    if (password.trim() === "") {

      setPasswordError("Password is required");
      valid = false;

    } else if (!passwordRegex.test(password)) {

      setPasswordError(
        "Minimum 6 characters required"
      );

      valid = false;
    }

    if (!valid) return;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "loginTime",
      new Date().toLocaleString()
    );

    sessionStorage.setItem(
      "sessionEmail",
      email
    );

    sessionStorage.setItem(
      "sessionStatus",
      "active"
    );

    sessionStorage.setItem(
      "sessionTime",
      new Date().toLocaleString()
    );

    let loginHistory =
      JSON.parse(
        localStorage.getItem("loginHistory")
      ) || [];

    loginHistory.push({
      email,
      password,
      loginTime: new Date().toLocaleString()
    });

    localStorage.setItem(
      "loginHistory",
      JSON.stringify(loginHistory)
    );

    alert("Login Successful!");
  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1 className="logo">
          Fab Fit
        </h1>

        <p className="sub-text">
          Login to continue shopping
        </p>

        {/* Email */}

        <div>

          <label>
            Email Address
          </label>

          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <p className="error">
            {emailError}
          </p>

        </div>

        {/* Password */}

        <div>

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <p className="error">
            {passwordError}
          </p>

        </div>

        <div className="forgot">

          <Link
  to="/forgot-password"
  className="forgot-link"
>
  Forgot Password?
</Link>

        </div>

        <button
          className="btn-login"
          onClick={loginUser}
        >
          LOGIN
        </button>

        <div className="divider">

          <hr />
          <span>OR</span>
          <hr />

        </div>

        <button className="google-btn">

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
          />

          Continue with Google

        </button>

        <p className="text-center text-gray-500 mt-3">
  Don't have an account?{" "}
  <Link
    to="/signup"
    className="text-red-500 font-semibold"
  >
    Create Account
  </Link>
</p>

      </div>

    </div>
  );
}

export default LoginPage;