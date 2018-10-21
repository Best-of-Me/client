import React from "react";
import ProgressBar from "../components/ProgressBar/";
import "./Home.scss";
import axios from 'axios'
import {Link} from 'react-router-dom'
import queryString from 'query-string'
import ReactSVG from 'react-svg'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      yupi:"",
      boom:"",
      index:null
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
      this.setState({ loading: false });
      this.props.setUser(currentUser)
    })
    .catch(e => console.log(e.response));
  }

  completeTask = (index) =>{
    this.setState({index,yupi:"yupi",boom:"boom"})
    console.log(index)
    const {currentUser} = this.props
    this.service.post(`/users/${currentUser._id}/tasks/${currentUser.tasks[index]._id}`,{points:currentUser.tasks[index].points})
    .then(res=>{
      if(res.status===200){
        return this.service.put(`/users/${currentUser._id}/tasks/random`, { index })
      }else{
        return Promise.reject(res)
      }
    })
    .then(result => {
      if(result.status===200){
        this.props.history.replace("/")
        setTimeout(()=>{
          this.props.setUser(result.data)
          this.setState({index,yupi:"",boom:""})
      },1000)
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
  componentWillMount(){
    const index = queryString.parse(this.props.location.search).index
      if(index!==undefined && this.state.index===null) this.completeTask(index)
  }
  render() {
    const {yupi,boom,index}=this.state
    let {
      level,
      experience,
      background,
      pet,
      accessory,
      experienceNextLevel
    } = this.props.currentUser;
    background=(background)?background:process.env.REACT_APP_BASENAME+"/static/svg/blue-background.svg"
    const {tasks} = this.props.currentUser
    experience = 75;
    experienceNextLevel = 100;
    let percentage =
      ((experience - experienceNextLevel / 2) / (experienceNextLevel / 2)) *
        100 || 0;
    return (
      <div className="home">
        <div className="background" style={{backgroundImage: `url(${background})`}}>
          <ReactSVG className={`pet ${(yupi==="")?"boing":yupi}`} src={pet || process.env.REACT_APP_BASENAME+"/static/svg/bom.svg"}  />
          <div className="level">
            <ProgressBar percentage={percentage} />
            <div>Level {level}</div>
          </div>
          {accessory||<ReactSVG className="accessory" src={accessory||process.env.REACT_APP_BASENAME+"/static/svg/gafas.svg"}></ReactSVG>}
          <ul className="tasks">
            {tasks.map((task,taskIndex)=>{
              if(!task) return <li key={taskIndex}><div className="Oval"> </div></li>
              return (
                <li key={taskIndex}>
                  <Link to={`/tasks/${task._id}?index=${taskIndex}`} className={`Oval ${(index==taskIndex)?boom:""}`}>
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
