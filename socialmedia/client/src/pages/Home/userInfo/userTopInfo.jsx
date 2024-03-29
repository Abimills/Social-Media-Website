import React from "react";
import { BsCardImage } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import { IoAttachOutline } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const UserTopInfo = ({ user }) => {
  const navigate = useNavigate();
  const redirectPost = () => {
    navigate("/me/create-post");
  };

  return (
    <div className="top-container">
      <div className="image-search-container">
        <img src={user.photo} alt={user.firstName} className="person-top" />
        <div className="search search-top">
          <input type="text" placeholder=" What is on your mind" />
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="attachment-container">
        <div className="attachment-top">
          <div className="image-attachment toper">
            <BsCardImage className="attach-icons" />
            <p>Image</p>
          </div>
          <div className="clip-attachment toper">
            <BsClipboardCheck className="attach-icons" />
            <p>Clip</p>
          </div>
          <div className="attached-attachment toper">
            <IoAttachOutline className="attach-icons" />
            <p>Attachment</p>
          </div>
          <div className="audio-attachment toper">
            <AiFillAudio className="attach-icons" />
            <p>Audio</p>
          </div>
        </div>
        <button className="post" onClick={redirectPost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default UserTopInfo;
