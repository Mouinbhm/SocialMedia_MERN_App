import "./style.css";
import React from "react";

const Usernamecard = () => {
  return (
    <>
      <div className="username_card">
        <div className="username_card_image">
          <img src="https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-neige-noir-et-blanc-ville-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className="username_card_info">
          <h3 className="username"> Mouin Belhaj</h3>
          <span className="small">@belhajmouin</span>
        </div>
      </div>
    </>
  );
};

export default Usernamecard;
