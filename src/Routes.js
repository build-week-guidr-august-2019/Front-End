import React from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserCreate from "./components/user/UserCreate";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={UserLogin} />
      <Route path="/register" exact component={UserCreate} />
    </>
  );
};

export default Routes;
