import React from "react";
import { Badge } from "./Badge";
import { TrustBtn } from "./TrustBtn";
import { StatementList } from "./StatementList";

export class Main extends React.Component {
  // constructor() {
  //     super();

  // }

  render() {
    return (
      <div className="main">
        <div className="badge">Badge</div>
        <div className="trustBtn"> TrustBtn </div>
        <div className="statementsListContainer">
          <StatementList />
        </div>
      </div>
    );
  }
}

    render() {
        return (
            <div>
                <Badge />
                <TrustBtn />
                <StatementList />
            </div>
        );
    }
}