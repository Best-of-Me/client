import React from 'react'
export default class Input extends React.Component {
  render(){
    const {placeholder,name,type,value}=this.props
    return (
      <div className="field">
        <label>{name.charAt().toUpperCase()+name.slice(1)}</label>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={(e)=>this.props.onChange(e)}></input>
      </div>
    )
   }
}