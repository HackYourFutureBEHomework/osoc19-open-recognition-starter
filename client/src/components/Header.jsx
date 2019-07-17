import React, { Component } from "react";
import logo from "../images/orson.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container">
          <img src={logo} alt="Open Recognition Logo" class="logo_on" />
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
        </div>
      </nav>
    );
  }
}

export default Header;
