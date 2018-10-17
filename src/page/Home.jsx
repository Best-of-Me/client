import React from "react";
import ProgressBar from "../components/ProgressBar/";
import "./Home.scss";
import axios from 'axios'
import {Link} from 'react-router-dom'
import queryString from 'query-string'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  initTasks(){
    let {currentUser}=this.props
    this.service.get("/tasks/random")
    .then(response=>{
      if(response.status===200){
        let tasks=response.data.map(task=>task._id)
        return this.service.put(`/users/${currentUser._id}/tasks`,{tasks})
      }else{
        return Promise.reject(response)
      }
    })
    .then(responses => {
      currentUser.tasks=responses.data.tasks.map(response=>response.data)
      this.setState({ currentUser, loading: false });
    })
    .catch(e => console.log(e.response));
  }

  completeTask = (index) =>{
    const {currentUser} = this.props
    this.service.put(`/users/${currentUser._id}/tasks/random`, { index })
    .then(result => {
      if(result.status===200){
        this.props.history.replace("/")
        this.props.setUser(result.data)
      }else{
        return Promise.reject(result)
      }
    })
    .catch(e => console.log(e))
  }

  componentDidMount() {
    if(this.props.currentUser.tasks.length===0){
      this.initTasks()
    }
      
  }
  render() {
    const index = queryString.parse(this.props.location.search).index
    if(index!==undefined) this.completeTask(index)
    let {
      level,
      experience,
      background,
      pet,
      accessory,
      experienceNextLevel
    } = this.props.currentUser;
    const {tasks} = this.props.currentUser
    experience = 75;
    experienceNextLevel = 100;
    let percentage =
      ((experience - experienceNextLevel / 2) / (experienceNextLevel / 2)) *
        100 || 0;
    return (
      <div className="home">
        <div className="background">
          <div className="level">
            <ProgressBar percentage={percentage} />
            <div>Level {level}</div>
          </div>
          {background || "default"} background
          <div className="pet">
          {pet || "BoM"}
          <div>{accessory || "with out"}</div>
          </div>
          <ul className="tasks">
            {tasks.map((task,taskIndex)=>{
              if(!task) return <li key={taskIndex}><div className="Oval"> </div></li>
              return (
                <li key={taskIndex}>
                  <Link to={`/tasks/${task._id}?index=${taskIndex}`} className="Oval">
                  <p className="OvalText">{task.name}</p>
                  </Link>
                </li>
              )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
