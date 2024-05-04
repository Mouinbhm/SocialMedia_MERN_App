import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="logo-container">
          <img src="logo.png"alt="Logo" className="logo" />
          <b>Let's Talk</b>
        </div>
      </div>
      <div className="navbar_right">
        <div className="navbar_profile_search">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <button className="navbar_profile_button">
          <FontAwesomeIcon icon={faCirclePlus} /> Create
        </button>
        <div className="navbar_profile_image">
        <img src="https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-neige-noir-et-blanc-ville-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
