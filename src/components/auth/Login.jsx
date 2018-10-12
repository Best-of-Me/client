import React from "react";
import Input from "../Input";
import authService from "./AuthService";
import { Link, Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { email: "", password: "" };
    this.service = new authService();
  }
  onChangeHandler = e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // this.setState({username:e./target.value})
  };
  logIn = e => {
    e.preventDefault();
    let { email, password } = this.state;
    this.setState({ message: "" });
    console.log(email, password, this.state);
    this.service
      .login(email, password)
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          console.log(this.props)
          this.props.setUser(res.data);
          this.setState({redirect:true})
        } else {
          console.log(res.status);
          this.setState({ email: "", password: "", message: res.data.message });
        }
      })
      .catch(error => {
        console.log({ ...error });
        this.setState({ ...error.data });
      });
  };
  render() {
    if (this.props.currentUser) {
      return <Redirect to="/" />;
    } else {
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
          <button onClick={e => this.logIn(e)}>Login</button>
          <Link to="/auth/signup">Sign up</Link>
        </div>
      );
    }
  }
}
