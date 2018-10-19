import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
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
  getUser=(currentUser)=>{
    this.service.loggedin()
    .then(e=>{
      setTimeout(()=>{
        if(e.status===200){
        this.setState({currentUser:e.data,loading:false})
        }else{
         this.setState({loading:false})
        }
      },1000)
    })
    .catch(e=>console.log(e))
  }
  componentWillMount(){
    this.getUser()
  }
  render() {
    if(this.state.loading){
      return <div className="App" >
          <img className="loading" alt="loading" src="static/img/loading.png"></img>
        </div>
    }else{
      return(
        <Switch>
          <Route path="/auth" render={()=><Auth className="App" currentUser={this.state.currentUser} setUser={this.setUser} />} />
          <Route path="/" render={()=><Page className="App" currentUser={this.state.currentUser} setUser={this.setUser}/>} />
        </Switch>
      )
    }
  }
}

export default App;
