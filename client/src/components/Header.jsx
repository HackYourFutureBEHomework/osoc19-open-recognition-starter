import React, { Component } from "react";
import logo from "../images/orson.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container">
          <img src={logo} alt="Open Recognition Logo" className="logo_on" />
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
        </div>
      </nav>
    );
  }
}

export default Header;
