//https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
import React from 'react'
import './ProgressBar.scss'
export default class ProgressBar extends React.Component{
  render(){
    return(
      <div className="progress-bar" title={this.props.title}>
        <div className="filler" style={{width:`${this.props.percentage}%`}}></div>
      </div>
    )
  }
}