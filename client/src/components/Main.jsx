import React, { Component } from "react";
import MyProfile from "./MyProfile";

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      fromUserId: 1,
      fromUserInfo: {},
      toUserId: Number(props.location.pathname.split("/")[2]),
      toUserInfo: {}
    };
  }

  // componentDidMount = () => {
  //   this.getToUserInfo();
  //   this.getFromUserInfo();
  // };

  // Get info of the logged in user
  getToUserInfo = async () => {
    const data = await fetch(`/api/users/${this.state.toUserId}`);
    const userData = await data.json();
    this.setState({ toUserInfo: userData });
    console.log("to userInfo ", this.state.toUserInfo);
  };

  // Get info of the user that we browse his/her profile
  getFromUserInfo = async () => {
    const data = await fetch(`/api/users/${this.state.fromUserId}`);
    const userData = await data.json();
    this.setState({ fromUserInfo: userData });
    console.log("from userInfo ", this.state.fromUserInfo);
  };

  render() {
    const { fromUserId, fromUserInfo } = this.state;
    return (
      <MyProfile
        fromUserId={fromUserId}
        fromUserInfo={fromUserInfo}
        getFromUserInfo={this.getFromUserInfo}
      />
    );
  }
}

export default Main;
