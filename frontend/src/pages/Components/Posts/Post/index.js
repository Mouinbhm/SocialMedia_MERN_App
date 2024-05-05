import React from "react";
import "./style.css";
const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post_user-details">
          <div className="user_image">
            <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="user_name">
            <h5>Khouloud</h5>
            <span>12 hours ago</span>
          </div>
        </div>

        <div className="post_actions"></div>
        <div className="post_content_details">
            <p>
                Hello this is my first post...
            </p>
        </div>
        <div className="post_buttons"></div>
      </div>
    </>
  );
};

export default Post;
