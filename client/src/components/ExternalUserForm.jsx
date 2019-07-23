import React, { Component } from "react";
import MyProfile from "./MyProfile";

class ExternalUserForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      photo: "",
      trustStatement: "",
      externalUserInfo: {},
      isFinished: false,
      after5sec: false
    };
  }

  handleSubmit = e => {
    this.addExternalUser();
    setTimeout(() => {
      this.addExternalStatement();
    }, 1000);
    e.preventDefault();
    this.setState({ isFinished: true });
    setTimeout(() => {
      this.changeAfter5second();
      console.log("aftr5sec changes");
    }, 6000);
  };

  //Add new external user to external users table
  addExternalUser = async () => {
    const response = await fetch("/api/external-users", {
      method: "POST",
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        profession: this.state.profession,
        photo: this.state.photo
      }),
      headers: { "Content-Type": "application/json" }
    });
    const externalUserInfo = await response.json();
    this.setState({ externalUserInfo });
    console.log(this.state.externalUserInfo);
  };

  // add new statement into statements table
  addExternalStatement = async () => {
    const response = await fetch("/api/statements", {
      method: "POST",
      body: JSON.stringify({
        text: this.state.trustStatement,
        date: "17/7/2019",
        fromExternalUserId: this.state.externalUserInfo.id,
        toUserId: this.props.toUserInfo.id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  viewUserProfile = () => {
    return <MyProfile userId={this.props.toUserInfo.id} isExternal={true} />;
  };

  changeAfter5second = () => {
    this.setState({ after5sec: true });
    this.viewFinishedView();
  };

  viewThanksMessage = () => {
    return (
      <div>
        <h1> {`Thank your for your statement ${this.state.firstName}`} </h1>
      </div>
    );
  };

  viewFinishedView = () => {
    return this.state.after5sec
      ? this.viewUserProfile()
      : this.viewThanksMessage();
  };

  handleInputFirstName = e => {
    this.setState({ firstName: e.target.value });
    console.log("firstName", this.state.firstName);
  };

  handleInputLastName = e => {
    this.setState({ lastName: e.target.value });
    console.log("lastName", this.state.lastName);
  };

  handleInputEmail = e => {
    this.setState({ email: e.target.value });
    console.log("email", this.state.email);
  };

  handleInputProfession = e => {
    this.setState({ profession: e.target.value });
    console.log("profession", this.state.profession);
  };

  handleInputPhoto = e => {
    this.setState({ photo: e.target.value });
    console.log("photo", this.state.photo);
  };

  handleInputStatement = e => {
    this.setState({ trustStatement: e.target.value });
    console.log("statement", this.state.trustStatement);
  };

  viewDefualtView = () => {
    return (
      <div>
        <form className="external-user-from" onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              placeholder="example Jhon"
              onChange={this.handleInputFirstName}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              placeholder="example Doe"
              onChange={this.handleInputLastName}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              placeholder="example JhonDoe@gamil.com"
              onChange={this.handleInputEmail}
            />
          </label>
          <label>
            Profession:
            <input
              type="text"
              placeholder="example Web Developer"
              onChange={this.handleInputProfession}
            />
          </label>
          <label>
            Photo:
            <input
              type="text"
              placeholder="example John.png"
              onChange={this.handleInputPhoto}
            />
          </label>
          Your Statement :
          <textarea
            type="text"
            placeholder="Write your statement here"
            onChange={this.handleInputStatement}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };

  render() {
    return this.state.isFinished
      ? this.viewFinishedView()
      : this.viewDefualtView();
  }
}

export default ExternalUserForm;
