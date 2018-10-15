import React from "react";
import ProgressBar from "../components/ProgressBar/";
import "./Home.scss";
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      tasks:[{},{},{}],
      loading: true
    };
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }
  componentWillMount() {
    this.service("/tasks/random")
      .then(e => {
        this.setState({ tasks: e.data, loading: false });
      })
      .catch(e => console.log(e.response));
  }
  render() {
    let {
      level,
      experience,
      background,
      pet,
      accessory,
      experienceNextLevel
    } = this.state.currentUser;
    const {tasks} = this.state
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
            {tasks.map(task=>{
              return (
                <li >
                  <Link to={`/tasks/${task._id}`} className="Oval">
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
