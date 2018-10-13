import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from './auth';
import Page from './page';
import AuthService from './auth/AuthService'
import logo from './logo.svg'

class App extends Component {
  constructor(){
    super()
    this.state={currentUser:null,loading:true}
    this.service= new AuthService()
  }
  setUser=currentUser=>{
    this.setState({currentUser})
  }
  getUser=currentUser=>{
    this.service.loggedin()
    .then(e=>{
      console.log(e)
      if(e.status===200){
        this.setState({currentUser:e.data,loading:false})
      }else{
        this.setState({loading:false})
      }
    })
    .catch(e=>console.log(e))
  }
  componentWillMount(){
    this.getUser()
  }
  render() {
    console.log(this.props.history)
    if(this.state.loading){
      return <img className="App-logo" alt="loading" src={logo}></img>
    }else{
      return(
        <Switch>
          <Route path="/auth" render={()=><Auth currentUser={this.state.currentUser} setUser={this.setUser} />} />
          <Route path="/" render={()=><Page currentUser={this.state.currentUser} />} />
        </Switch>
      )
    }
      
  }
}

export default App;
