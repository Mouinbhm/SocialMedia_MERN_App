import React, { useState } from "react";
import UserService from "../services/user.service";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [picture, setPicture] = useState("");

  const register = async (e) => {
    e.preventDefault();
    console.log("form submited");
    console.log(
      "form data",
      firstname,
      lastname,
      email,
      password,
      bio,
      birthdate
    );

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      bio: bio,
      birthdate: birthdate,
      picture: picture,
    };

    try {
      const response = await UserService.register(data);
      console.log("response ===> ", response);
      toast.success("User created successfully!");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setBirthdate("");
      setBio("");
    } catch (err) {
      console.log(err);
      toast.error("failed while signup!");
    }
  };

  return (
    <div className="register">
      <Toaster />
      <div className="register-cover"></div>

      <div className="register-content">
        <div>
          <h1>Join Our Community</h1>
          <p>Welcome to Let's Talk Social Media Platform</p>
        </div>

        <form onSubmit={register}>
          <div className="form-group">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-Mail"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself"
            ></textarea>
          </div>

          <div className="form-group">
            <input type="file" />
          </div>

          <div className="form-group">
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder="Birthdate"
            />
          </div>

          <button className="btn signup" type="submit">
            {" "}
            Sign Up{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
