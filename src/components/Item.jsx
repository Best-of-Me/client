import React from 'react'

export default class Item extends React.Component{

  render(){
    return (
      <div>{this.props.items.map(item=>{
          return (
              <div key={item.name}>
                <img src={item.image} alt={item.name}/>
                <ul>
                  <li>{item.name}</li>
                  <li>{item.description}</li>
                  <li>{item.price} <button>Comprar</button></li>
                </ul>
                </div>
            )
          })}
      </div>
    )
  }
}