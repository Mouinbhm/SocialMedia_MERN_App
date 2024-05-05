import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const NewPost = () => {
  return (
    <>
      <div className="new_post">
        <div className="new_post_details">
          <div className="new_post_profile-image">
            <img src="https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-neige-noir-et-blanc-ville-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile"/>
          </div>
          <div className="new_post_textbox">
            <textarea placeholder="what's in your mind"></textarea>
          </div>
        </div>
        <div className="new_post_buttons">
          <button>
            <FontAwesomeIcon icon={faShare}/>
            Post it
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPost;
