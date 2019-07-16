import React from "react";
import "../index.css";
import Header from "../components/header/Header";
import Search from "../components/search/searchresult";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class Myroutes extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          first_name: "steve"
        }
      ]
    };
  }

  getuser = x => {
    this.setState({
      users: x
    });
  };

  render() {
    console.log(this.props.test);
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Header getuser={this.getuser} />}
            />
            <Route
              exact
              path="/search"
              render={props => <Search users={this.state.users} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
