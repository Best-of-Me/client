import React from "react";
import axios from 'axios';
import './Task.scss'

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, task: null }
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
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
    if (this.state.loading) {
      return <div>loading</div>;
    } else {
      let {task}=this.state
      if(!task._id){
        return <div>Task not found</div>
      }else{
        return (
          <div className="Tasks">
            <h2>{task.name}</h2>
            <p>+{task.points} points</p>
            <p>{task.description}</p>
            <button>Complete</button>
            <button>change</button>
          </div>
        );
      }
    }
  }
}
