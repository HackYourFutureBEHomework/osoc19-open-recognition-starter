import React from "react";
import logo from '../images/oR-logo.png';
import searchbar from '../images/searchbar.png';

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
                <img src={searchbar} alt="Search Bar" className="Searchbar"/>
                <a href=" " className="Signout">Sign Out</a>
            </div>
        );
    }
}
