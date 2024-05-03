import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <b>Let's Talk</b>
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
          <img src=""  />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
