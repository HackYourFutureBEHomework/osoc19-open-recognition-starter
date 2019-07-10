import React from "react";
import ProfileImage from '../images/default.png';

export class Badge extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: ""
    //     };
    // }

    render() {
        return (
            <div>
                <div className="BadgeSpacer">
                    &nbsp;
                </div>
                <div className="ProfileBadge">
                    <div className="BadgeImage"><img src={ProfileImage} alt="Profile" className="ProfileImage"/></div>
                    <div className="BadgeText"><h1>Badge</h1></div> 
                </div>
            </div>
        );
    }
}
