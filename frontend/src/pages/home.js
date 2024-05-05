import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/navbar";
import Usernamecard from "./Components/UsernameCard";
import Sidebar from "./Components/sidebar";
import Stories from "./Components/Stories";
import Request from "./Components/request";
import Posts from "./Components/Posts";

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
      <div className="layout-app">
        <div style={{ width: "25%" }}>
          <Usernamecard user={connectedUser} />
          <Sidebar />
        </div>
        <div style={{ width: "50%" }}>
          <Stories />
          <Posts/>
        </div>
        <div style={{ width: "25%" }}><Request/></div>
      </div>

      {/*<h1>Hello {connectedUser.firstname || "Guest"}</h1>*/}
    </>
  );
};

export default Home;
