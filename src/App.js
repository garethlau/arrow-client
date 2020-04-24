import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Nav from "./components/Nav";
import Home from "./components/Home";

import { StateProvider } from "./store.js";

function App() {
  return (
    <StateProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/create" component={Create} />
          <Route path="/edit" component={Create} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
