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
    <div className="container">
      <div className="row justify-content-md-center">
          <div className="col-md-11">
              <button onClick={this.handleGenerateEndpoint}>Generate Link for Non-members</button>
              <br />
              <input type="text" id="generateLink" className="form-control col-lg-10" defaultValue={`http://localhost:3000/addStatemetLink/user/${
                  this.state.linkInfo.to_user_id
                }/${this.state.linkInfo.endpoint}`} />
          </div>
      </div>
    </div>
    );
  }
}

export default LinkGenerator;