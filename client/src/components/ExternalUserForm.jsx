import React, { Component } from "react";

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
      toUserInfo: {},
      isFinished: false
    };
  }

  componentDidMount = () => {
    this.getToUserInfo();
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

  handleSubmit = e => {
    this.addExternalUser();
    setTimeout(() => {
      this.addExternalStatement();
    }, 1000);
    e.preventDefault();
    this.setState({ isFinished: true });
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

  //Get user's info who statement will be written on his/her profile
  getToUserInfo = async () => {
    const data = await fetch(
      `/api/users/${Number(this.props.location.pathname.split("/")[3])}`
    );
    const userData = await data.json();
    this.setState({ toUserInfo: userData });
    console.log("toUserInfo", this.state.toUserInfo);
  };

  // add new statement into statements table
  addExternalStatement = async () => {
    const response = await fetch("/api/statements", {
      method: "POST",
      body: JSON.stringify({
        text: this.state.trustStatement,
        date: "17/7/2019",
        fromExternalUserId: this.state.externalUserInfo.id,
        toUserId: this.state.toUserInfo.id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  viewFinishedView = () => {
    return (
      <header class="jumbotron">
        <div class="container">
          <div class="row justify-content-md-center">
              <div class="col-md-10">
                      <h1 class="display-4">{`Thank your for your statement ${this.state.firstName}`} </h1>
                      <p class="lead">I just made a comrubition to a User's profile. Well done! You will be directed to the profile you just contrubitured...</p>
                      <hr class="my-4"/>
                      <div class="text-center">
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
              </div>
          </div>
        </div>
      </header>
    );
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
