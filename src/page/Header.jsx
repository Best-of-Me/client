import React from "react";
import './Header.scss'
import {Link} from 'react-router-dom'
const Header = (props) => {
  const {pathname} = props.location
  console.log(pathname)
  return <header><Link to={pathname==="/"?"/profile":"/"}>{pathname==="/"?"profile":"back"}</Link>Header{process.env.REACT_APP_PRUEBA}</header>;
};
export default Header;
