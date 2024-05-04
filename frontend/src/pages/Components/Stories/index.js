import React from "react";
import "./style.css";
import Story from "./story";

const Stories = () => {
  const stories = [
    {
      username: "Ahmed",
      user_photo:
        "https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-neige-noir-et-blanc-ville-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story_photo:
        "https://images.pexels.com/photos/7268587/pexels-photo-7268587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Mariem",
      user_photo:
        "https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-neige-noir-et-blanc-ville-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story_photo:
      "https://images.pexels.com/photos/17324141/pexels-photo-17324141/free-photo-of-belle-bmw-g80-m3-noir-satine-canon-6d-mark-ll-35-mm-f1-4-1-320-s-a-f-1-4-iso-100.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      username: "ALi",
      user_photo:
        "https://images.pexels.com/photos/21751135/pexels-photo-21751135/free-photo-of-neige-noir-et-blanc-ville-paysage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story_photo:
      "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];
  return (
    <>
      <div className="stories">
        <Story type="new" />
        {stories.map((story) => (
          <Story type="old" data={story} />
        ))}
      </div>
    </>
  );
};

export default Stories;
