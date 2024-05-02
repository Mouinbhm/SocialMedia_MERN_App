import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: "",
    birthdate: "",
  });

  const formValidation = () => {
    let localErrors = { ...errors };

    if (!email) {
      localErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      localErrors.email = "Invalid email format";
    }
    if (!password || password.length < 8) {
      localErrors.password = "Password is required (min 8 characters)";
    }
    setErrors(localErrors);
    return Object.values(localErrors).every((error) => error === "");
  };
  return (
    <div className="register">
      <Toaster />
      <div className="login-cover"></div>

      <div className="login-content">
        <div>
          <h1>Join Our Community</h1>
          <p>Welcome to Let's Talk Social Media Platform</p>
        </div>

        <div>
          <form>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail"
              />
              <div className="error">{errors.email}</div>
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="error">{errors.password}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
