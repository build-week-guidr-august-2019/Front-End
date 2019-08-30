import React from "react";
import { withRouter } from "react-router";
import Routes from "./Routes";
import Header from "./components/page/Header";
import Footer from "./components/page/footer";
import "semantic-ui-css/semantic.min.css";

const exclusionaryArray = ["/login", "/register"];

function App({ location, history }) {
  return (
    <div className="App">
      {exclusionaryArray.indexOf(location.pathname) < 0 && (
        <Header history={history} />
      )}
      <Routes />
      {exclusionaryArray.indexOf(location.pathname) < 0 && <Footer />}
    </div>
  );
}

export default withRouter(App);
