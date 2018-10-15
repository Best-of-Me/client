import React from "react";
import axios from 'axios';
import './Tasks.scss'

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, tasks: null }
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
                    <h2>{task.name}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                      </h2>
                    <p>+{task.points} points</p>
                  </summary>
                  <p>{task.description}</p>
                  <button></button>
                </details>
              </li>
            )})}
        </ul>
      );
    }
  }
}
