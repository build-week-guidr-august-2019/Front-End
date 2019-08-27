import React from "react";
import { Route } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import UserCreate from "./components/user/UserCreate";
import PortfolioList from "./components/portfolio/PortfolioList";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={UserLogin} />
      <Route path="/register" exact component={UserCreate} />
      <Route path="/portfolio" exact component={PortfolioList} />
    </>
  );
};

export default Routes;
