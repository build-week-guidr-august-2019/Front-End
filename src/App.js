import React, { Switch } from "react";
import { withRouter } from "react-router";
import Routes from "./Routes";
import Footer from "./components/page/footer";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

const exclusionaryArray = ["/login", "/register"];

function App({ location }) {
  return (
    <div className="App">
      {exclusionaryArray.indexOf(location.pathname) < 0 && <Header />}
      <Routes />
      {exclusionaryArray.indexOf(location.pathname) < 0 && <Footer />}
    </div>
  );
}

export default withRouter(App);
