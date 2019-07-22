import React, { Component } from "react";
import logo from "../img/logo-50x.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
         <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar aqua-gradient">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src={logo} alt="Open Recognition Logo" className="logo_on" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <a class="nav-link" href="#"></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"></a>
                </li>
              </ul>
            <form class="form-inline">
              <div class="md-form my-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </form>
          </div>
        </div>
      </nav>
  </header>
    );
  }
}

export default Header;
