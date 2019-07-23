import React from "react";
import StatementItem from "./StatementItem";

//import axios from "axios";

export class StatementList extends React.Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-11">
              {this.props.userStatements.map(statement => (
                  <StatementItem key={statement.id} statementInfo={statement} />
                  ))}
          </div>
        </div>
      </div>
    );
  }
}

export default StatementList;
