import React, { Component } from "react";

class TrustBtn extends Component {
  state = {};

  handleTrust = () => {
    this.props.establishTrustRelation(
      this.props.fromUserId,
      this.props.toUserId
    );
  };

  handleBreak = () => {
    this.props.breakTrustRelation(this.props.fromUserId, this.props.toUserId);
  };

  turstedView = () => {
    return (
      <div className="TrustButtonArea">
        <button className="TrstBtn" onClick={this.handleBreak}>
          Break trust
        </button>
        <div className="contacts_count">
          <span>13</span>
        </div>
      </div>
    );
  };

  defaultView = () => {
    console.log();
    return (
      <div className="TrustButtonArea">
        <button className="TrstBtn" onClick={this.handleTrust}>
          I trust this person
        </button>
        <div className="contacts_count">
          <span>13</span>
        </div>
      </div>
    );
  };

  render() {
    return this.props.isTrusted ? this.turstedView() : this.defaultView();
  }
}

export default TrustBtn;
