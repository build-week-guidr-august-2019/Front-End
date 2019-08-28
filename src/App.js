import React from "react";
import Routes from "./Routes";
import Footer from "./components/page/footer";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { withRouter } from "react-router";

function App({ location }) {
  return <Routes />;
}

export default withRouter(App);
