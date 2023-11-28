import React from "react";
import "./card.css";


const Card = ({ userName, userDesignation, content, userImage }) => (
  <div className="card">
    <div className="user-container">
      <div className="user-image">
        <img src={userImage} alt="User" className="user-avatar" />
      </div>
      <div className="user-details">
        <h2>{userName}</h2>
        <p>{userDesignation}</p>
      </div>
    </div>
    <p className="review-content">{content}</p>
  </div>
);

export default Card;
