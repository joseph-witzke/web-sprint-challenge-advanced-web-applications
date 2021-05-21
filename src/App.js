import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import BubblePage from './components/BubblePage';
import "./styles.scss";


function App() {
  const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="#">logout</a>
        </header> 
        <Switch>

          <PrivateRoute path="/bubbles"component={BubblePage} />
          <Route exact path="/" component={Login} />
          <Redirect exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.