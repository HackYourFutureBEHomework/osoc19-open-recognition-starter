import React from "react";
import TrustBtn from "./TrustBtn";
import ProfileImage from "../images/wael.JPG";

// import ProfileImage from "../images/wael.JPG";
// import "../images";

const Badge = props => {
  const { userInfo, toUserId, fromUserId, isTrusted, establishTrustRelation, breakTrustRelation, checkTrustExitence } = props;
  return (
    <header className="jumbotron">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-5">
                    <div className="media">
                        <img src={ProfileImage} alt="Profile"  className="img-thumbnail" width="200px" height="200px" />
                        <div className="media-body">
                            <h2 className="mt-1">{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                            <h6 className="mt-1">{`Email: ${userInfo.email}`}</h6>
                            <h6 className="mt-1">{`Profession: ${userInfo.profession}`}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-end flex-column bd-highlight mb-3">
                        <TrustBtn toUserId={toUserId} 
                                  fromUserId={fromUserId}
                                  establishTrustRelation={establishTrustRelation}
                                  breakTrustRelation={breakTrustRelation}
                                  checkTrustExitence={checkTrustExitence}
                                  isTrusted={isTrusted}/>  
                        <div className="mt-auto p-2 bd-highlight">13</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};
export default Badge;
