import React from "react";
import axios from 'axios';
import {Link,Redirect} from 'react-router-dom';
import './Task.scss'
import queryString from 'query-string'

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      task: null,
      taskToChange:null,
      redirect:null,
      index:queryString.parse(this.props.location.search).index
    }
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  completeTask = () =>{
    const {task,index} = this.state
    this.setState({taskToChange:{task,index}})
  }
  componentWillMount(){
    const {pathname}=this.props.location
    this.service.get(pathname)
    .then(e => {
      this.setState({ task: e.data[0], loading: false });
    })
    .catch(e => console.log(e.response));
  }
  render() {
    const {taskToChange} = this.state
    if (taskToChange) {
      return <Redirect to={{pathname:"/",state:{taskToChange}}}/>
    }
    if (this.state.loading) {
      return <div>loading</div>;
    } else {
      let {task,index}=this.state
      if(!task._id){
        return <div>Task not found</div>
      }else{
        return (
          <div className="Tasks">
            <h2>{task.name}</h2>
            <p>+{task.points} points</p>
            <p>{task.description}</p>
            <button onClick={this.completeTask}>Complete</button>
            <Link to={`/?index=${index}`}>Complete</Link>
            <Link to={`/tasks?index=${index}`}>change</Link>
          </div>
        );
      }
    }
  }
}
