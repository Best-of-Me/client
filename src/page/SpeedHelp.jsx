import React from "react";
import { Link } from "react-router-dom";
import data from "../speedHelp";
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
    const option = this.props.match.params.id;
    let options = {...feelings};
    let title = "How you feeling?";
    let path="happenings"
    if (selections.feelings) {
      options = { ...happenings };
      title = "What happend?";
      path="situations"
    }
    if (selections.happenings) {
      options = { ...situations };
      title = "Where tou are?";
      path="advises"
    }
    if (selections.situations) {
      options = { ...advises };
      title = "Advise:";
    }
    let renderOptions = [];
    console.log(options, this.state.selections);
    for (let option in options) {
      options[option].option=option
      renderOptions.push(options[option]);
    }
    console.log(renderOptions, this.props.match,path);
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {renderOptions.map(o => {
            return (
              <li key={o.text} onClick={() => this.setSelection(o.option,option,path)} >
                <img src={o.image} alt={o.text} />
                <p>{o.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
