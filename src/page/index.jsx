import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Diary from "./Diary";
import Header from "./Header";
import SpeedHelp from "./SpeedHelp";
import Shop from "../components/Shop";
import NavBar from "../components/NavBar";
import AuthService from '../auth/AuthService'

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: this.props.currentUser };
    this.service = new AuthService();
  }
  render() {
    if (this.state.currentUser) {
      return (
        <div className="App">
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/speedHelp" component={SpeedHelp} />
            <Route path="/diary/:id(\w+)?/:id2(\w+)?" component={Diary} />
            <Route path="/shop" component={Shop} />
            <Route component={() => <div>404</div>} />
          </Switch>
          <Route path="/" component={NavBar} />
        </div>
      );
    } else {
      return <Redirect to="/auth/login" />;
    }
  }
}
