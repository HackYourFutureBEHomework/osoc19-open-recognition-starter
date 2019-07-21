import React from "react";

// import ProfileImage from "../images/wael.JPG";
// import "../images";

const Badge = props => {
  const { userInfo } = props;

  return (
    <div className="ProfileBadge">
      <div className="BadgeImage">
        <img
          src={process.env.PUBLIC_URL + userInfo.photo}
          alt="Profile"
          className="ProfileImage"
        />
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
