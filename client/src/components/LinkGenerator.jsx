import React, { Component } from "react";

class LinkGenerator extends Component {
  state = {
    viewlinkInfo: {},
    editlinkInfo: {}
  };

  // Create a reandom endpoint
  makeEndpoint = length => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  //Create a new random edpoint
  handleGenerateViewEndpoint = async () => {
    const response = await fetch("/api/links", {
      method: "POST",
      body: JSON.stringify({
        toUserId: this.props.userId,
        endpoint: this.makeEndpoint(20),
        isViewMode: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    this.setState({ viewlinkInfo: result });
    console.log("linkInfo", this.state.viewlinkInfo);
  };

  handleGenerateEditEndpoint = async () => {
    const response = await fetch("/api/links", {
      method: "POST",
      body: JSON.stringify({
        toUserId: this.props.userId,
        endpoint: this.makeEndpoint(20),
        isViewMode: false
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    this.setState({ editlinkInfo: result });
    console.log("editlinkInfo", this.state.editlinkInfo.endpoint);
  };

  render() {
    return (
      <div className="link-generator">
        <div className="view-link-generator">
          <span> For View </span>
          <button onClick={this.handleGenerateViewEndpoint}>Generate</button>
          <input
            type="text"
            Value={`http://localhost:3000/userProfileForExternal/${
              this.state.viewlinkInfo.endpoint
            }`}
          />
        </div>
        <div className="Edit-link-generator">
          <span> For Edit </span>
          <button onClick={this.handleGenerateEditEndpoint}>Generate</button>
          <input
            type="text"
            Value={`http://localhost:3000/userProfileForExternal/${
              this.state.editlinkInfo.endpoint
            }`}
          />
        </div>
      </div>
    );
  }
}

export default LinkGenerator;
