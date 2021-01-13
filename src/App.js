import React from "react";
import "./App.css";
import {  Route, Switch } from "react-router-dom";
import  Home  from "./components/Home";

import Login from "./components/Login";
import Register from "./components/Register";
import Weather from "./components/Weather";

function App() {
  
  
  
  return (
    <div className="App">
      

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/weather" >
          <Weather />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
