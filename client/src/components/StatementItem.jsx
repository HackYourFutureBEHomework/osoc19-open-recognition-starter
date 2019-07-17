import React, { Component } from "react";
import InfoImage from "../images/default.png";

class StatementItem extends Component {
  constructor(props) {
    super();
    this.state = {
      statement: props.statementInfo,
      users: [],
      publisher: {}
    };
  }

  componentDidMount = () => {
    this.getUsersData();
  };

  // Get all users from the server
  getUsersData = async () => {
    const data = await fetch("/api/users/");
    const usersData = await data.json();
    this.setState({ users: usersData });

    this.getPublisherInfo(this.state.statement.from_user_id);
  };

  // Get the specific statement's owner info by Id
  getPublisherInfo = id => {
    const users = [...this.state.users];
    const Index = users.findIndex(user => user.id === id);
    this.setState({ publisher: users[Index] });
  };

  render() {
    // const { statementInfo } = this.props;
    const { statement, publisher } = this.state;
    return (
      <>
      <div class="card">
          <div class="card-body">
              <div class="media">
                  <img src={InfoImage} class="mr-3" alt="..." width="50px" height="50px" />
                  <div class="media-body">
                      <h5 class="mt-0">{`${publisher.first_name} ${publisher.last_name}`}</h5>
                      <p>{publisher.profession}</p>
                  </div>
              </div>
              <p class="card-text">{statement.text} </p>
          </div>
      </div>
      <br/>
      </>
    );
  }
}

export default StatementItem;
