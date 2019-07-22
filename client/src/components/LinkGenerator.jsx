import React, { Component } from "react";

class LinkGenerator extends Component {
  state = {
    linkInfo: {}
  };

  handleGenerateEndpoint = async () => {
    const response = await fetch(`/api/users/${this.props.userId}/links`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    this.setState({ linkInfo: result });
    console.log("linkInfo", this.state.linkInfo);
  };

  render() {
    return (
      <div className="link-generator">
        <button onClick={this.handleGenerateEndpoint}>Generate</button>
        <input
          type="text"
          defaultValue={`http://localhost:3000/addStatemetLink/user/${
            this.state.linkInfo.to_user_id
          }/${this.state.linkInfo.endpoint}`}
        />
      </div>
    );
  }
}

export default LinkGenerator;
