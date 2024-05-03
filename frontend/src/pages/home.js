import React, { useEffect, useState } from "react";

const Home = () => {
  const [connectedUser, setConnectedUser] = useState(null); // Initialiser à null pour éviter les erreurs de rendu

  const getConnectedUserData = () => {
    const userData = localStorage.getItem("user_data");
    if (userData) {
      setConnectedUser(JSON.parse(userData));
    }
  };

  useEffect(() => {
    getConnectedUserData();
  }, []);

  return (
    <>
      {connectedUser ? (
        <h1>Hello {connectedUser.firstname}</h1>
      ) : (
        <h1>Hello Guest</h1>
      )}
    </>
  );
};

export default Home;
