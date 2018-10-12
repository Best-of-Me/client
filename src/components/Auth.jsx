import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Signup from './auth/Signup'

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  render (){
    return (
      <Switch>
        <Route path="/auth/signup" component={Signup} />
        <Route path="/auth/login" render={()=><Login currentUser={this.props.currentUser} setUser={this.props.setUser} />} />
        <Route component={() => <div>404</div>} />
      </Switch>
    )
  }
}
