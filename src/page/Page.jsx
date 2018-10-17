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
import Profile from './Profile'

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
  }
  render() {
    if (this.props.currentUser) {
      let {currentUser}=this.props
      return (
        <div className="App">
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" exact render={({location,history})=> <Home currentUser={currentUser} location={location} history={history} setUser={this.props.setUser} ></Home>} />
            <Route path="/speedHelp/:id?" component={SpeedHelp} />
            <Route path="/diary/:id(\w+)?/:id2(\w+)?" component={Diary} />
            <Route path="/shop/:id(\w+)?" component={Shop} />
            <Route path="/tasks/:id(\w+)" render={(props)=><Task {...props} currentUser={currentUser} setUser={this.props.setUser}></Task>} />
            <Route path="/tasks" render={(props)=><Tasks {...props} currentUser={currentUser} setUser={this.props.setUser}></Tasks>} />
            <Route path="/profile" render={()=><Profile  currentUser={currentUser}></Profile>} />
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
