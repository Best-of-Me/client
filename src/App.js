import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from './components/Auth';
import Page from './components/Page';
import AuthService from './components/auth/AuthService'

class App extends Component {
  constructor(){
    super()
    this.state={currentUser:null}
    this.service= new AuthService()
  }
  setUser=currentUser=>{
    this.setState({currentUser})
  }
  getUser=currentUser=>{
    this.service.loggedin()
    .then(e=>{
      if(e.status==200){
        this.setState({currentUser:e.data})
      }
  })
  }
  componentWillMount(){
    this.getUser()
  }
  render() {
    console.log(this.state)
    return(
      <Switch>
        <Route path="/auth" render={()=><Auth currentUser={this.state.currentUser} setUser={this.setUser} />} />
        <Route path="/" render={()=><Page currentUser={this.state.currentUser} />} />
      </Switch>
    )
      
  }
}

export default App;
