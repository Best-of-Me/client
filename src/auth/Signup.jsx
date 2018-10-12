import React from "react";
import Input from "../components/Input";
import authService from "./AuthService";
import { Link,Redirect } from "react-router-dom";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.service = new authService();
    this.redirect=false
  }
  onChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  signUp = e => {
    e.preventDefault();
    let { email, password } = this.state;
    this.setState({ message: "" });
    this.service
      .signup(email, password)
      .then(u => {
        if(u.status===201){

          this.setState({redirect:true})
        } else{
          console.log(u.status);
          this.setState({ email: "", password: "", message: u.data.message });

        }
      })
      .catch(e => {
        console.log({ ...e });
        this.setState({ ...e.data });
      });
  };
  render() {
    if(this.state.redirect){
      return <Redirect to="/auth/login" />
    }else{
      return (
        <div>
          <div>{this.state.message}</div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onChangeHandler}
            value={this.state.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="*********"
            onChange={this.onChangeHandler}
            value={this.state.password}
          />
          <button onClick={e => this.signUp(e)}>Signup</button>
          <Link to="/auth/login">Log in</Link>
        </div>
      )
    }
  }
}
