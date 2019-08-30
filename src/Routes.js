import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserCreate from "./components/user/UserCreate";
import Dashboard from "./components/page/dashboard";
import TripCreate from "./components/trip/TripCreate";
import TripDetail from "./components/trip/TripDetail";
import TripEdit from "./components/trip/TripEdit";
import AboutGuidr from "./components/about/about";
import CareerForm from "./components/about/careers";
import BecomeAGuide from "./components/about/guide";

const Routes = () => {
  return (
    <>
      <Route path="/login" exact component={UserLogin} />
      <Route path="/register" exact component={UserCreate} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/trips/add" exact component={TripCreate} />
      <Route path="/trips/:id" component={TripDetail} />
      <Route path="/trips/:id/edit" exact component={TripEdit} />
      <Route path="/about" component={AboutGuidr} />
      <Route path="/careers" component={CareerForm} />
      <Route path="/become-a-guide" component={BecomeAGuide} />
    </>
  );
};

export default Routes;
