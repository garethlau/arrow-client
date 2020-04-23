import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Button } from "@blueprintjs/core";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
axios.defaults.withCredentials = true;

function Home() {
  return (
    <div>
      <h1>Welcome to Arrow</h1>
      <Button intent="primary" text="Nice" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
