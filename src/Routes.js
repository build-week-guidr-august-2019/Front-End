import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserCreate from "./components/user/UserCreate";
import Dashboard from "./components/page/dashboard";
import TripCreate from "./components/trip/TripCreate";
import TripDetail from "./components/trip/TripDetail";

const Routes = () => {
  return (
    <>
      <Route path="/login" exact component={UserLogin} />
      <Route path="/register" exact component={UserCreate} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/trips/add" exact component={TripCreate} />
      <Route path="/trips/:id" component={TripDetail} />
    </>
  );
};

export default Routes;
