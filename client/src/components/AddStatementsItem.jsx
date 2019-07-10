import React, { Component } from "react";

class AddStatementItem extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  addStatement = async trustStatemnet => {
    const response = await fetch("/api/statements", {
      method: "POST",
      body: JSON.stringify({
        text: trustStatemnet,
        date: "9/7/2019",
        fromUserId: 1,
        toUserId: 2
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("22222222222");
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };

  handleSubmit = event => {
    this.addStatement(this.state.value);
    event.preventDefault();
    console.log("11111111");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange}>
          here is our text area for trust statement
        </textarea>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddStatementItem;
