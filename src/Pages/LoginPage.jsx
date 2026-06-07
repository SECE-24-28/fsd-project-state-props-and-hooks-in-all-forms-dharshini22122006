import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "../Context/ToastContext";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const loginUser = () => {
    setEmailError("");
    setPasswordError("");

    let valid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex = /^.{6,}$/;

    if (email.trim() === "") {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid Gmail address");
      valid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      valid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Minimum 6 characters required");
      valid = false;
    }

    if (!valid) return;

    axios.post("http://localhost:5000/api/user/login", {
      email,
      password
    })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", res.data.data.isAdmin ? "true" : "false");

      if (res.data.data.isAdmin) {
        showToast("Welcome back, Admin! 👋", "success");
        navigate("/admin");
      } else {
        showToast("Logged in successfully! Welcome to Fab Fit.", "success");
        navigate("/");
      }
    })
    .catch(err => {
      showToast(err.response?.data?.message || "Login failed!", "error");
    });
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

          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>

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
          <svg viewBox="0 0 24 24" width="20" height="20" style={{ marginRight: '10px' }}>
            <path
              fill="#ea4335"
              d="M5.2662 9.7645C6.1988 6.9638 8.8547 4.92 12 4.92c1.7227 0 3.2813.6141 4.5023 1.6235l3.4805-3.4805C17.8922 1.1682 15.0844 0 12 0 7.332 0 3.3273 2.6979 1.3917 6.6219l3.8745 3.1426z"
            />
            <path
              fill="#34a853"
              d="M16.0406 18.0134c-1.1359.7616-2.5265 1.2066-4.0406 1.2066-3.1453 0-5.8012-2.0438-6.7338-4.8445L1.3917 17.4981C3.3273 21.4221 7.332 24.12 12 24.12c2.993 0 5.7023-1.0087 7.743-2.7071l-3.7024-3.3995z"
            />
            <path
              fill="#4285f4"
              d="M23.6391 12.276c0-.8478-.0758-1.6638-.218-2.4508H12v4.6503h6.5258c-.282 1.517-.1138 2.7932-1.4607 3.5379l3.7024 3.3995c2.164-1.9913 3.8716-5.2864 3.8716-9.1369z"
            />
            <path
              fill="#fbbc05"
              d="M5.2662 9.7645C5.0273 10.4852 4.9 11.2588 4.9 12.06c0 .8012.1273 1.5748.3662 2.2955L1.3917 17.4981C.5055 15.8647 0 14.0153 0 12.06s.5055-3.8047 1.3917-5.4381l3.8745 3.1426z"
            />
          </svg>
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