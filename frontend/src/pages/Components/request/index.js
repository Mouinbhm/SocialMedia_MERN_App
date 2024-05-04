import React from "react";
import "./style.css";
import Request from "./request";

const Requests = () => {
  const requests = [
    {
      username: "Amine ",
      profile_image:
        "https://images.pexels.com/photos/10349963/pexels-photo-10349963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Mohamed",
      profile_image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Wajdi",
      profile_image:
        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      username: "Ali",
      profile_image:
        "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <>
      <div className="request">
        <div className="requests_title">
          <h4>Requests</h4>
          <h4 className="request_number">5</h4>
        </div>
        {requests.map((req) => (
          <Request data={req} />
        ))}
      </div>
    </>
  );
};
export default Requests;
