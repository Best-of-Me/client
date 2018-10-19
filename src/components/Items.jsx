import React from 'react'
import './Items.scss'

export default class Item extends React.Component{

  render(){
    return (
      <div className="Items">{this.props.items.map(item=>{
          return (
              <div className="item" key={item.name}>
                <div className="left">
                  <img src={item.image} alt={item.name}/>
                </div>
                <div className="right">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div><b>${item.price}</b><button>Comprar</button></div>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}