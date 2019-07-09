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
            <div>
                <img src={logo} alt="Open Recognition Logo" className="logo"/>
                <h5>Sign Out</h5>
            </div>
        );
    }
}
