import React from "react";
import StatementItem from "./StatementItem";

//import axios from "axios";

export class StatementList extends React.Component {
  state = {};

  render() {
    return (
      <div className="statement_list">
        {this.props.userStatements.map(statement => (
          <StatementItem key={statement.id} statementInfo={statement} />
        ))}
      </div>
    );
  }
}

export default StatementList;
