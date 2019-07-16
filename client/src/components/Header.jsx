import React, { Component } from "react";
import logo from "../images/oR-logo.png";
import searchbar from "../images/searchbar.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="Header">
        <img src={logo} alt="Open Recognition Logo" className="logo" />
        <img src={searchbar} alt="Search Bar" className="Searchbar" />
        <a href=" " className="Signout">
          Sign Out
        </a>
      </header>
    );
  }
}

export default Header;
