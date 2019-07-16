import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import MyProfile from "./MyProfile";
import UserProfile from "./UserProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/myProfile" component={MyProfile} />
        <Route path="/userProfile/:id" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
