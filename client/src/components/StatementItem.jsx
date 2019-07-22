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
    (this.state.statement.from_user_id && this.getPublisherInfo()) ||
      this.getExternalPublisherInfo();
  };

  getPublisherInfo = async () => {
    const data = await fetch(`/api/users/${this.state.statement.from_user_id}`);
    const publisherData = await data.json();
    this.setState({ publisher: publisherData });
    console.log("publ", publisherData);
  };

  getExternalPublisherInfo = async () => {
    const data = await fetch(
      `/api/external-users/${this.state.statement.from_external_user_id}`
    );
    const ExPublisherData = await data.json();
    this.setState({ publisher: ExPublisherData });
    console.log("ExP", ExPublisherData);
  };

  // Get all users from the server
  // getUsersData = async () => {
  //   const data = await fetch("/api/users/");
  //   const usersData = await data.json();
  //   this.setState({ users: usersData });

  //   this.getPublisherInfo(this.state.statement.from_user_id);
  // };

  // // Get the specific statement's owner info by Id
  // getPublisherInfo = id => {
  //   const users = [...this.state.users];
  //   const Index = users.findIndex(user => user.id === id);
  //   this.setState({ publisher: users[Index] });
  // };

  render() {
    // const { statementInfo } = this.props;
    const { statement, publisher } = this.state;
    console.log(statement);
    return (
      <>
      <div className="card">
          <div className="card-body">
              <div className="media">
                  <img src={InfoImage} className="mr-3" alt="..." width="50px" height="50px" />
                  <div className="media-body">
                      <h5 className="mt-0">{`${publisher.first_name} ${publisher.last_name}`}</h5>
                      <p>{publisher.profession}</p>
                  </div>
              </div>
              <p className="card-text">{statement.text} </p>
          </div>
      </div>
      <br/>
      </>
    );
  }
}

export default StatementItem;
