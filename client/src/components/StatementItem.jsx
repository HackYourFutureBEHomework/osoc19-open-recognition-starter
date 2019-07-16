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
      <div className="statement_item">
        <div className="statement_text"> {statement.text} </div>
        <div className="statement_userInfo">
          <img src={InfoImage} alt="InfoImage" />
          <h3>{`${publisher.first_name} ${publisher.last_name}`}</h3>
          <h3>{publisher.profession}</h3>
        </div>
      </div>
    );
  }
}

export default StatementItem;
