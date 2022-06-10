import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import React, { Component } from "react";
import Blogdetails from "./blogsdetails";
import Notfound from "./notfound";

function App() {
  // const title = "riri and pri";
  // let likes = 50;
  // let link = "https://www.google.com";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <Blogdetails />
            </Route>
            <Route>
              <Notfound path="*" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
