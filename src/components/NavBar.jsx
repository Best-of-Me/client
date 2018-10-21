import React from "react";
import './NavBar.scss'
import { NavLink } from "react-router-dom";
import ReactSVG from 'react-svg'

const NavBar = () => {
  return (
    <footer>
      <NavLink exact to="/"><ReactSVG class="icon" src={process.env.REACT_APP_BASENAME+"/static/svg/home-icon.svg"} /><b>Home</b></NavLink>
      <NavLink to="/speedHelp"><ReactSVG class="icon" src={process.env.REACT_APP_BASENAME+"/static/svg/speedHelp-icon.svg"} />Speed Help</NavLink>
      <NavLink to="/diary"><ReactSVG class="icon" src={process.env.REACT_APP_BASENAME+"/static/svg/diary-icon.svg"} />Diary</NavLink>
      <NavLink to="/shop"><ReactSVG class="icon" src={process.env.REACT_APP_BASENAME+"/static/svg/shop-icon.svg"} />Shop</NavLink>
    </footer>
  );
};
export default NavBar;
