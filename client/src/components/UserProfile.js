import React, { Component } from "react";
import Header from "./Header";
import Badge from "./Badge";
import StatementList from "./StatementList";
import AddStatementItem from "./AddStatementsItem";
import Footer from "./Footer";

class UserProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      fromUserId: 2,
      toUserId: Number(props.location.pathname.split("/")[2]),
      toUserInfo: {},
      userStatements: [],
      isTrusted: false,
      isTrustedToAdd: false
    };
  }

  componentDidMount = () => {
    this.getToUserInfo();
    this.checkTrustExitence(this.state.fromUserId, this.state.toUserId);
    this.checkTrustPerson(this.state.toUserId, this.state.fromUserId);
    this.getUserStatements();
  };

  // setToUserId = () => {
  //   console.log(this.props.location.pathname);
  //   if (this.props.location.pathname === "/userProfile/MyProfile") {
  //     console.log("in if", this.props.location.pathname.split("/")[2]);
  //     this.setState({ isMyProfile: true });
  //     console.log("ismyprof ", this.state.wael);
  //   } else {
  //     console.log("in else", this.props.location.pathname.split("/")[2]);
  //     this.setState({ isMyProfile: false });
  //     // this.setState({
  //     //   toUserId: Number(this.props.location.pathname.split("/")[2]),
  //     //   isMyProfile: false
  //     // });
  //   }
  //   console.log("isMyProfile", this.state.wael);
  //   // console.log("ismy", this.state.isMyProfile);
  // };

  // Get specific user's info from the server by id
  getToUserInfo = async () => {
    const data = await fetch(`/api/users/${this.state.toUserId}`);
    const userData = await data.json();
    this.setState({ toUserInfo: userData });
    console.log("toUserInfo", this.state.toUserInfo);
  };

  // Create a Trust relation from  fromUserId to toUserId
  establishTrustRelation = async (fromUserId, toUserId) => {
    const response = await fetch("/api/trust-relations", {
      method: "POST",
      body: JSON.stringify({
        fromUserId: fromUserId,
        toUserId: toUserId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.setState({ isTrusted: true });
  };

  // Delete the trust relation between fromUserId and toUserId
  breakTrustRelation = async (fromUserId, toUserId) => {
    const response = await fetch(
      `/api/trust-relations/${fromUserId}/${toUserId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    this.setState({ isTrusted: false });
    console.log(this.state.isTrusted);
  };

  // Check if a specific trust relation between fromUserId and toUserId is already exist or not

  checkTrustExitence = async (fromUserId, toUserId) => {
    const response = await fetch(
      `/api/trust-relations/exist/${fromUserId}/${toUserId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const result = await response.json();
    this.setState({ isTrusted: result });
    console.log("result", this.state.isTrusted);
  };

  checkTrustPerson = async (toUserId, fromUserId) => {
    const response = await fetch(
      `/api/trust-relations/exist/${toUserId}/${fromUserId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const result = await response.json();
    this.setState({ isTrustedToAdd: result });
    console.log("can add commnet", result);
  };

  // Get all statements of specific user using his Id
  getUserStatements = async () => {
    const data = await fetch(`/api/users/${this.state.toUserId}/statements`);
    const jsonData = await data.json();
    this.setState({ userStatements: jsonData });
  };

  handleAddStatement = async trustStatemnet => {
    const response = await fetch("/api/statements", {
      method: "POST",
      body: JSON.stringify({
        text: trustStatemnet,
        date: "17/7/2019",
        fromUserId: this.state.fromUserId,
        toUserId: this.state.toUserId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.getUserStatements();
  };

  render() {
    const {
      toUserId,
      fromUserId,
      toUserInfo,
      isTrusted,
      userStatements
    } = this.state;
    console.log("toUserStatemet", userStatements);
    //this.checkTrustExitence(fromUserId, toUserId);
    return (
      <div className="user_profile">
        <Header />
        <Badge userInfo={toUserInfo}           
          toUserId={toUserId}
          fromUserId={fromUserId}
          establishTrustRelation={this.establishTrustRelation}
          breakTrustRelation={this.breakTrustRelation}
          checkTrustExitence={this.checkTrustExitence}
          isTrusted={isTrusted} />

        <StatementList userId={toUserId} userStatements={userStatements} />
        {this.state.isTrustedToAdd && (
          <AddStatementItem addStatement={this.handleAddStatement} />
        )}
        <Footer />
      </div>
    );
  }
}

export default UserProfile;
