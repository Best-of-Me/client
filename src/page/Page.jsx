import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Diary from "./Diary";
import Header from "./Header";
import SpeedHelp from "./SpeedHelp";
import Shop from "./Shop";
import Tasks from "./Tasks";
import Task from "./Task";
import NavBar from "../components/NavBar";
import AuthService from '../auth/AuthService'

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: this.props.currentUser };
    this.service = new AuthService();
    console.log(props)
  }
  render() {
    if (this.state.currentUser) {
      let {currentUser}=this.state
      return (
        <div className="App">
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" exact state={currentUser} render={()=><Home currentUser={this.state.currentUser}></Home>} />
            <Route path="/speedHelp/:id?" component={SpeedHelp} />
            <Route path="/diary/:id(\w+)?/:id2(\w+)?" component={Diary} />
            <Route path="/shop/:id(\w+)?" component={Shop} />
            <Route path="/tasks/:id(\w+)" component={Task} />
            <Route path="/tasks" component={Tasks} />
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
