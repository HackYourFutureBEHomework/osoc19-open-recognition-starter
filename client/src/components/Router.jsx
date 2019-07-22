import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import MyProfile from "./MyProfile";
import UserProfile from "./UserProfile";
import ExternalUserForm from "./ExternalUserForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/myProfile/:id" component={MyProfile} />
        <Route path="/userProfile/:id" component={UserProfile} />
        <Route
          path="/addStatemetLink/user/:user_id/:link"
          component={ExternalUserForm}
        />

        {/* <Route path="/external/:link" component={externalStatementForm} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
