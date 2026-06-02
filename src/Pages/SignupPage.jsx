import React, { useState } from "react";

function SignupPage() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
  });

  const signupUser = () => {

    let valid = true;

    let newErrors = {
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: ""
    };

    if (firstName.trim() === "") {
      newErrors.firstNameError = "First name required";
      valid = false;
    }

    if (lastName.trim() === "") {
      newErrors.lastNameError = "Last name required";
      valid = false;
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email.trim() === "") {
      newErrors.emailError = "Email required";
      valid = false;
    }
    else if (!emailRegex.test(email)) {
      newErrors.emailError = "Enter valid Gmail";
      valid = false;
    }

    if (password.trim() === "") {
      newErrors.passwordError = "Password required";
      valid = false;
    }
    else if (password.length < 6) {
      newErrors.passwordError = "Min 6 characters";
      valid = false;
    }

    if (confirmPassword.trim() === "") {
      newErrors.confirmPasswordError = "Confirm password";
      valid = false;
    }
    else if (password !== confirmPassword) {
      newErrors.confirmPasswordError = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("isRegistered", "true");

    sessionStorage.setItem("sessionUser", firstName);
    sessionStorage.setItem("sessionEmail", email);
    sessionStorage.setItem("sessionStatus", "active");

    let signupHistory =
      JSON.parse(
        localStorage.getItem("signupHistory")
      ) || [];

    signupHistory.push({
      firstName,
      lastName,
      email,
      signupTime: new Date().toLocaleString()
    });

    localStorage.setItem(
      "signupHistory",
      JSON.stringify(signupHistory)
    );

    alert("Signup Successful!");

    console.log(signupHistory);
  };

  return (
    
    <div className="bg-[#fff5f5] min-h-screen flex items-center justify-center">

      <div className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-md p-5">

        <h1 className="text-4xl font-black italic text-red-600 mb-1">
          Fab Fit
        </h1>

        <p className="text-gray-500 text-md mb-3">
          Create your account to start shopping
        </p>

        <div className="grid grid-cols-2 gap-3 mb-2">

          <div>
            <label className="block text-base font-semibold mb-1">
              First Name
            </label>

            <input
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-red-500"
            />

            <p className="text-red-500 text-xs h-4">
              {errors.firstNameError}
            </p>
          </div>

          <div>
            <label className="block text-base font-semibold mb-1">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-red-500"
            />

            <p className="text-red-500 text-xs h-4">
              {errors.lastNameError}
            </p>
          </div>

        </div>

        <div className="mb-2">

          <label className="block text-base font-semibold mb-1">
            Email Address
          </label>

          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-red-500"
          />

          <p className="text-red-500 text-xs h-4">
            {errors.emailError}
          </p>

        </div>

        <div className="mb-2">

          <label className="block text-base font-semibold mb-1">
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-red-500"
          />

          <p className="text-red-500 text-xs h-4">
            {errors.passwordError}
          </p>

        </div>

        <div className="mb-2">

          <label className="block text-base font-semibold mb-1">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-2 outline-none focus:border-red-500"
          />

          <p className="text-red-500 text-xs h-4">
            {errors.confirmPasswordError}
          </p>

        </div>

        <button
          onClick={signupUser}
          className="w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-2 rounded-xl transition"
        >
          SIGN UP
        </button>
        

      </div>

    </div>
  );
}

export default SignupPage;