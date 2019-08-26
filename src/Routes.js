import React from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";

const Routes = () => {
  return (
    <>
      <Route path="/login" component={UserLogin} />
    </>
  );
};

export default Routes;
