import React, { Component } from "react";

class PeopleTurstedUserSlider extends Component {
  constructor() {
    super();
    this.state = {
      toUserId: 3,
      trustedUsersList: [],
      i: 0
    };
  }

  componentDidMount = () => {
    this.getTrustedUsers();
    this.interval = setInterval(() => this.changeTrustedUserInfo(), 3000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTrustedUsers = async () => {
    const data = await fetch(`/api/users/${this.state.toUserId}/trustedUsers`);
    const trustedUsers = await data.json();
    this.setState({ trustedUsersList: trustedUsers });
    console.log(trustedUsers);
  };

  changeTrustedUserInfo = () => {
    console.log("anything");
    if (this.state.i < this.state.trustedUsersList.length - 1) {
      this.setState({ i: this.state.i + 1 });
    } else {
      this.setState({ i: this.state.i * 0 });
    }
  };

  render() {
    console.log(this.state.i);
    const { i, trustedUsersList } = this.state;
    console.log("list", this.state.trustedUsersList);
    return trustedUsersList.length === 0 ? (
      <div>lodding</div>
    ) : (
      <div>{trustedUsersList[i].first_name}</div>
    );
  }
}

export default PeopleTurstedUserSlider;
