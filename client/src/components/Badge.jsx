import React, { Component } from "react";
import ProfileImage from "../images/wael.JPG";

const Badge = props => {
  const { userInfo } = props;

  return (
    <div className="ProfileBadge">
      <div className="BadgeImage">
        <img src={ProfileImage} alt="Profile" className="ProfileImage" />
      </div>
      <div className="BadgeText">
        <h1>{`${userInfo.first_name} ${userInfo.last_name}`}</h1>
        <h3>{`Email: ${userInfo.email}`}</h3>
        <h3>{`Profession: ${userInfo.profession}`}</h3>
        <h3>{`Address: ${userInfo.address}`}</h3>
      </div>
    </div>
  );
};

export default Badge;
