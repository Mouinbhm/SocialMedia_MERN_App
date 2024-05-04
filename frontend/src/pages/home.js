import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/navbar";
import Usernamecard from "./Components/UsernameCard";

const Home = () => {
  const [connectedUser, setConnectedUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getConnectedUserData = () => {
      const userData = localStorage.getItem("user_data");
      if (userData === null) {
        navigate("/login");
      } else {
        setConnectedUser(JSON.parse(userData));
      }
    };

    getConnectedUserData();
  }, [navigate]);

  return (
    <>
      <Navbar />

      <Usernamecard />
      {/*<h1>Hello {connectedUser.firstname || "Guest"}</h1>*/}
    </>
  );
};

export default Home;
