import React from "react";
import "./style.css";
import Post from "./Post";
import NewPost from "./NewPost";
const Posts = () => {
  return (
    <>
      <div className="posts">
        <NewPost/>
        <Post/>
        <Post/>
      </div>
      
    </>
  );
};

export default Posts;
