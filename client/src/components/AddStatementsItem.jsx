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
    this.setState({statement : ""});
    console.log("new statement is added ..");
  };

  render() {
    return (
      <div className="container">
          <div className="row justify-content-md-center">
              <div className="col-11">
                  <div className="card">
                      <div className="card-body">
                          <form onSubmit={this.handleSubmit}>
                              <div className="form-group">
                                  <label for="exampleFormControlTextarea1">Your Statement:</label>
                                  <textarea value={this.state.statement} onChange={this.handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                  </div>
                              <button type="submit" className="btn btn-primary">Submit Statement</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default AddStatementItem;
