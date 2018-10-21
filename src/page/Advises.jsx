import React from "react";
import data from "../speedHelp";
import './Advises.scss'

const Advises = () => {
  const advise=data.advises.advise1 
  console.log(advise)
  return <div className="Advises">
    <h2>Advise:</h2>
    <p>{advise.text}</p>
    <p>{advise.text2}</p>
    Suggestion:
    <div>
      <div>
        <img src={process.env.REACT_APP_BASENAME+advise.suggestion[0].image} alt={advise.suggestion[0].image}/>
        <p>{advise.suggestion[0].text}</p>
      </div>
      <div>
        <img src={process.env.REACT_APP_BASENAME+advise.suggestion[1].image} alt={advise.suggestion[1].image}/>
        <p>{advise.suggestion[1].text}</p>
      </div>
    </div>
  </div>
}

export default Advises