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
    <div className="container">
      <div className="row justify-content-md-center">
          <div className="col-md-11">
            <button onClick={this.handleGenerateEndpoint} class="btn btn-outline-default">Generate Link for non-members<i class="fas fa-external-link-alt pl-1"></i></button>
            <br />
            <input type="text" id="generateLink" className="form-control col-lg-10" value={`http://localhost:3000/addStatemetLink/user/${
                this.state.linkInfo.to_user_id
              }/${this.state.linkInfo.endpoint}`} />
          </div>
      </div>
    </div>
    );
  }
}

export default LinkGenerator;
