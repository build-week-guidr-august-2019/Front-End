import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserCreate from "./components/user/UserCreate";
import Dashboard from "./components/page/dashboard";
import TripCreate from "./components/trip/TripCreate";
import TripDetail from "./components/trip/TripDetail";

const isLoggedIn = false;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <>
      <Route path="/login" exact component={UserLogin} />
      <PrivateRoute path="/register" exact component={UserCreate} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/trips/add" exact component={TripCreate} />
      <PrivateRoute path="/trips/:id" component={TripDetail} />
    </>
  );
};

export default Routes;
