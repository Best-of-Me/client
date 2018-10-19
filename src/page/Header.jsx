import React from "react";
import './Header.scss'
import {Link} from 'react-router-dom'
import ReactSVG from 'react-svg'

const parsePathname=(pathname)=>{
  pathname=pathname.replace(/^\/(\w*)(\/.*)?/,"$1")
  .replace(/([A-Z])/," $1")
  return pathname.charAt().toUpperCase()+pathname.slice(1)
}
const Header = (props) => {
  const {pathname} = props.location
  console.log(pathname)
  return <header>
      <Link to={pathname==="/"?"/profile":"/"}>
      <ReactSVG class="icon" src={pathname==="/"?"/static/svg/profile-icon.svg":"/static/svg/back-icon.svg"}/>
      </Link>
      <h1>{pathname==="/"?"BoM":parsePathname(pathname)}</h1>
    </header>;
};
export default Header;
