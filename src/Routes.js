import React from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserCreate from "./components/user/UserCreate";

const Routes = () => {
  return (
    <>
      <Route path="/register" component={UserCreate} />
      <Route path="/login" component={UserLogin} />
    </>
  );
};

export default Routes;
