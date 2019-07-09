import React from "react";
import logo from '../images/oR-logo.png';

export class Header extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: ""
    //     };
    // }
   

    render() {
        return (
            <div className="Header">
                <img src={logo} alt="Open Recognition Logo" className="logo"/>
                <a href=" " className="Signout">Sign Out</a>
            </div>
        );
    }
}
