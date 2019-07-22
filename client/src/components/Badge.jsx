import React from "react";
import TrustBtn from "./TrustBtn";
import ProfileImage from "../images/wael.JPG";

// import ProfileImage from "../images/wael.JPG";
// import "../images";

const Badge = props => {
  const { userInfo, toUserId, fromUserId, isTrusted, establishTrustRelation, breakTrustRelation, checkTrustExitence } = props;
  return (
    <header class="jumbotron">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-md-5">
                    <div class="media">
                        <img src={ProfileImage} alt="Profile"  class="img-thumbnail" width="200px" height="200px" />
                        <div class="media-body">
                            <h2 class="mt-1">{`${userInfo.first_name} ${userInfo.last_name}`}</h2>
                            <h6 class="mt-1">{`Email: ${userInfo.email}`}</h6>
                            <h6 class="mt-1">{`Profession: ${userInfo.profession}`}</h6>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-end flex-column bd-highlight mb-3">
                        <TrustBtn toUserId={toUserId} 
                                  fromUserId={fromUserId}
                                  establishTrustRelation={establishTrustRelation}
                                  breakTrustRelation={breakTrustRelation}
                                  checkTrustExitence={checkTrustExitence}
                                  isTrusted={isTrusted}/>  
                        <div class="mt-auto p-2 bd-highlight">13</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};
export default Badge;
