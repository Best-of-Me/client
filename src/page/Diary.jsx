import React from "react";
import {Bar,Line} from 'react-chartjs-2';
import api from '../api'
import moment from 'moment'
import './Diary.scss'

export default class Diary extends React.Component {
  constructor(props){
    super(props)
    this.api=api
  }
  componentDidMount(){
  }
  render(){
    const {completedTasks}=this.props.currentUser
    console.log(completedTasks)
    let tasksByDay = {}
    for(let i = 6;i >= 0;i--){
      const day=moment().subtract(i,"days").format('DD-MM-YYYY')
      tasksByDay[day]=0
      console.log(day)
    }
    console.log(tasksByDay)
    completedTasks.forEach(task=>{
      if(moment(task.created_at)>moment().subtract(6,"days")){
        const taskDay=moment(task.created_at).format('DD-MM-YYYY')
        tasksByDay[taskDay]++
      }
    })
    console.log(tasksByDay)
    const data= {
      labels: Object.keys(tasksByDay),
      datasets: [{
        fill: false,
        lineTension:.4,
        showLine:false,
        backgroundColor: "#86a4eb",
        borderColor: "#86a4eb",
        data: Object.values(tasksByDay),
        pointStyle:String
      }]
    }
    const options={
      legend:{display: false},
      showTooltips: false
    }
    return (
    <div className="Diary">
      Diary
      <div className="chart" >
      <Bar data={data} options={options}/>
      </div>
        
    </div>);
  }
}

