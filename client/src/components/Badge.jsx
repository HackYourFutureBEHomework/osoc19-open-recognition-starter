import React from "react";
import TrustBtn from "./TrustBtn";
import ProfileImage from "../img/wael.JPG";
import BgImgae from "../img/banner.png";

// import ProfileImage from "../images/wael.JPG";
// import "../images";

const Badge = props => {
  const { userInfo, toUserId, fromUserId, isTrusted, establishTrustRelation, breakTrustRelation, checkTrustExitence, showBtn } = props;

  const jarallax={speed: 0.2}
  const stylediv={
    backgroundImage: 'url(' + BgImgae  + ')',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    backgroundPosition:'center'
  }
  
  return (
    <>
      <div className="view jarallax" data-jarallax={jarallax} style={stylediv}>
        <div className="mask rgba-indigo-slight">
            <div className="container h-100 d-flex justify-content-center align-items-center">
                <div className="row pt-5 mt-3">
                    <div className="col-md-12 mb-3">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="container">
      <section className="text-center team-section">
        <div className="row text-center">
          <div className="col-md-12 mb-1" style={{marginTop: '-100px'}}>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                {showBtn && <TrustBtn toUserId={toUserId} 
                                  fromUserId={fromUserId}
                                  establishTrustRelation={establishTrustRelation}
                                  breakTrustRelation={breakTrustRelation}
                                  checkTrustExitence={checkTrustExitence}
                                  isTrusted={isTrusted}/> }
                </div>
                <div className="col-sm">
                  <div className="avatar mx-auto">
                    <img src={ProfileImage} class="img-fluid rounded-circle z-depth-1" alt="avatar" style={{width: '230px'}} />
                  </div>
                  <h3 className="my-3 font-weight-bold">
                    <strong>{`${userInfo.first_name} ${userInfo.last_name}`}</strong>
                  </h3>
                  <h6 className="font-weight-bold teal-text mb-4">{`${userInfo.profession}`}</h6>
                </div>
                <div className="col-sm">
                    <a className="btn-floating btn-lg btn-default text-white font-weight-bold" href={`www.google.com`}>13</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
export default Badge;
