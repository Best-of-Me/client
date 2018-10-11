import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SpeedHelp from "./components/SpeedHelp";
import Diary from "./components/Diary";
import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/speedHelp" component={SpeedHelp} />
        <Route path="/diary" component={Diary} />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={NavBar} />
      </div>
    );
  }
}

export default App;
