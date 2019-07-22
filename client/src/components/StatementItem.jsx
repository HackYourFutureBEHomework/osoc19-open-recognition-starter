import React, { Component } from "react";
import InfoImage from "../img/default.png";

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

  render() {
    // const { statementInfo } = this.props;
    const { statement, publisher } = this.state;
    console.log(statement);
    return (
      <>
      <div class="container">
      <section >
        <div class="media mt-4 px-1">
          <img class="card-img-100 d-flex z-depth-1 mr-3" src={InfoImage }
            alt="Generic placeholder" />
          <div class="media-body">
            <h5 class="font-weight-bold mt-0">{`${publisher.first_name} ${publisher.last_name}`}</h5>
            <p>{publisher.profession}</p>
            <p>{statement.text}</p>
          </div>
        </div>
      </section>
    </div>
      </>
    );
  }
}

export default StatementItem;
