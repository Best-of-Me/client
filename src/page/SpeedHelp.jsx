import React from "react";
import { Link } from "react-router-dom";
import data from "../speedHelp";
import './SpeedHelp.scss'

export default class SpeedHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...data,
      selections:{
        feelings: null,
        situations: null,
        happenings: null
      }
    };
  }
  setSelection = (selection,option,path) =>{
    let selections=this.state.selections
    console.log(selections,option,path)
    selections[option]=selection
    console.log(selections)
    console.log(this.props.history)
    this.props.history.push(path);
    this.setState({selections})
  }
  render() {
    console.log(this.state)
    const { feelings, situations, happenings,selections,advises } = this.state;
    let option = this.props.match.params.id||"feelings";
    console.log(option,this.props.match.params.id)
    let options = {...feelings};
    let title = "How are you feeling?";
    let path="/speedHelp/happenings"
    if (selections.feelings) {
      option="happenings"
      options = { ...happenings };
      title = "What happend?";
      path="/speedHelp/situations"
    }
    if (selections.happenings) {
      option="situations"
      options = { ...situations };
      title = "Where are you?";
      path="/speedHelp/advises"
    }
    if (selections.situations) {
      options = { ...advises };
      title = "Advise:";
    }
    let renderOptions = [];
    console.log(option,options, this.state.selections);
    for (let option in options) {
      options[option].option=option
      renderOptions.push(options[option]);
    }
    console.log(renderOptions, this.props.match,path);
    return (
      <div className="SpeedHelp">
        <h2>{title}</h2>
        <ul>
          {renderOptions.map(o => {
            return (
              <li key={o.text} onClick={() => this.setSelection(o.option,option,path)} >
                {(o.image!=="")?<img src={process.env.REACT_APP_BASENAME+o.image} alt={o.text} />:""}
                <p>{o.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
