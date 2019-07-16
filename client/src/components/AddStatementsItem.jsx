import React, { Component } from "react";

class AddStatementItem extends Component {
  constructor() {
    super();
    this.state = {
      statement: ""
    };
  }

  handleChange = event => {
    this.setState({ statement: event.target.value });
    console.log(this.state.statement);
  };

  handleSubmit = event => {
    this.props.addStatement(this.state.statement);
    event.preventDefault();
    console.log("new statement is added ..");
  };

  render() {
    return (
      <div className="add_statement_area">
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange}>
            add trust statement....
          </textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddStatementItem;
