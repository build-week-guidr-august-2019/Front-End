import React from "react";
import Routes from "./Routes";
import Header from "./components/page/Header";
import Footer from "./components/page/footer";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
