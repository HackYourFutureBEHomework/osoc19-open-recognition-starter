import React, { Component } from "react";
import Header from "./Header";
import Badge from "./Badge";
import StatementList from "./StatementList";
import Footer from "./Footer";
import "../App.css";

class MyProfile extends Component {
  constructor() {
    super();
    this.state = {
      userId: 1,
      userInfo: {}
    };
  }

  componentDidMount = () => {
    this.getUserData(this.state.userId);
  };

  // Get specific user's info from the server by id
  getUserData = async id => {
    const data = await fetch(`/api/users/${id}`);
    const userData = await data.json();
    this.setState({ userInfo: userData });
  };

  render() {
    return (
      <div className="myProfile">
        <Header />
        <Badge userInfo={this.state.userInfo} />
        <StatementList userId={this.state.userId} />
        <Footer />
      </div>
    );
  }
}

export default MyProfile;
