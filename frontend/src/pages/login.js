import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UserService from "../services/user.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "", // Modifier ici
    password: "", // Modifier ici
  });

  const formValidation = () => {
    let localErrors = { email: "", password: "" }; // Réinitialiser les erreurs à chaque validation

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

  const signin = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    if (formValidation()) {
      const data = {
        email: email,
        password: password,
      };
      try {
        const response = await UserService.signin(data);
        console.log("response ===> ", response);
        toast.success("User login successfully!");

        setEmail("");
        setPassword("");

        //Redirection
        navigate("/home");
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message);
      }
    } else {
      console.log("form invalid");
    }
  };

  return (
    <div className="login">
      <Toaster />
      <div className="login-cover"></div>

      <div className="login-content">
        <div>
          <h1>Join Our Community</h1>
          <p>Welcome to Let's Talk Social Media Platform</p>
        </div>

        <div>
          <form onSubmit={signin}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail"
              />
              <div className="error">{errors.email}</div>{" "}
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="error">{errors.password}</div>{" "}
            </div>
            <button className="btn signup" type="submit">
              Sign IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
