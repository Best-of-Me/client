import React from "react";
import axios from 'axios';
import './Tasks.scss'
import queryString from 'query-string'

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      tasks: null,
      index:queryString.parse(props.location.search).index
     }
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  componentWillMount(){
    this.service.get("/tasks")
    .then(e => {
      this.setState({ tasks: e.data, loading: false });
    })
    .catch(e => console.log(e.response));
  }

  changeTask = (task) => {
    const {  index } = this.state
    const {currentUser} = this.props
    this.service.put(`/users/${currentUser._id}/tasks/${task._id}`, { index })
      .then(result => {
        if(result.status===200){
          currentUser.tasks[index]=task
          this.props.setUser(currentUser)
          this.props.history.go(-2)
        }else{
          Promise.reject(result)
        }
      })
      .catch(e => console.log(e.response.data))
  }

  render() {
    if (this.state.loading) {
      return <div>loading</div>;
    } else {
      let {tasks}=this.state
      return (
        <ul className="Tasks">
          {tasks.map(task=>{
            return (
              <li>
                <details>
                  <summary>
                    <div>
                    <h2>{task.name}</h2>
                    <p>+{task.points} points</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                  </summary>
                  <div>
                    <p>{task.description}</p>
                  <button onClick={()=>this.changeTask(task)}><b>Chose task</b></button>
                  </div>
                </details>
                <div className="separator"></div>
              </li>
            )
          })}
        </ul>
      );
    }
  }
}
