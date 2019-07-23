import React, { Component } from "react";
import ExternalUserForm from "./ExternalUserForm";
import MyProfile from "./MyProfile";

class Exteranl extends Component {
  constructor() {
    super();
    this.state = {
      toUserInfo: {},
      linkInfo: {}
    };
  }

  componentDidMount = async () => {
    await this.getToUserInfo();
    await this.getLinkInfo();
  };

  //Get user's info who statement will be written on his/her profile
  getToUserInfo = async () => {
    const data = await fetch(
      `/api/links/link/${this.props.location.pathname.split("/")[2]}`
    );
    const userData = await data.json();
    this.setState({ toUserInfo: userData });
    this.setState({ islodded: true });
    console.log("toUserInfo", this.state.toUserInfo);
  };

  //Get link info
  getLinkInfo = async () => {
    const data = await fetch(
      `/api/links/${this.props.location.pathname.split("/")[2]}`
    );
    const linkData = await data.json();
    this.setState({ linkInfo: linkData });
    console.log("linkInfo", linkData);
  };

  // View user profile for external users
  viewUserProfile = () => {
    console.log("userrrrrinfo", this.state.toUserInfo);
    return <MyProfile userId={this.state.toUserInfo.id} isExternal={true} />;
  };

  // View external form for external users
  viewExternalForm = () => {
    return <ExternalUserForm toUserInfo={this.state.toUserInfo} />;
  };

  render() {
    console.log(this.props.location.pathname.split("/")[2]);
    return this.viewUserProfile();
  }
}
//<ExternalUserForm toUserInfo={this.state.toUserInfo} />
//this.viewExternalForm()
export default Exteranl;
