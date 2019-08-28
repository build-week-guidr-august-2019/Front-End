import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserCreate from "./components/user/UserCreate";
import Dashboard from "./components/page/dashboard";
import TripCreate from "./components/trip/TripCreate";

const Routes = () => {
  return (
    <>
      <Route path="/register" component={UserCreate} />
      <Route path="/login" component={UserLogin} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/trips/add" component={TripCreate} />
    </>
  );
};

export default Routes;
