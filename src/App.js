import React, { useEffect, useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginForm from "./components/login";
import RegisterForm from "./components/register";

function App() {
  return (
    <div>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </div>
  );
}

export default App;
