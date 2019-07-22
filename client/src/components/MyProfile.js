import React, { Component } from "react";
import Header from "./Header";
import Badge from "./Badge";
import StatementList from "./StatementList";
import LinkGenerator from "./LinkGenerator";
import Footer from "./Footer";

class MyProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      userId: Number(props.location.pathname.split("/")[2]),
      userInfo: {},
      userStatements: [],
      showBtn: false
    };
  }

  componentDidMount = () => {
    this.getUserData();
    this.getUserStatements();
  };

  // Get specific user's info from the server by id
  getUserData = async id => {
    const data = await fetch(`/api/users/${this.state.userId}`);
    const userData = await data.json();
    this.setState({ userInfo: userData });
  };

  // Get all statements of specific user using his Id
  getUserStatements = async () => {
    const data = await fetch(`/api/users/${this.state.userId}/statements`);
    const jsonData = await data.json();
    this.setState({ userStatements: jsonData });
  };

  render() {
    return (
      <div className="myProfile">
        <Header />
        <Badge userInfo={this.state.userInfo}
               showBtn={false}
        />
        <StatementList userStatements={this.state.userStatements} />
        <LinkGenerator userId={this.state.userId} />
        <Footer />
      </div>
    );
  }
}

export default MyProfile;