import React from "react";
import './NavBar.scss'
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <footer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/speedHelp/feelings">Speed Help</NavLink>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/shop/accessories">Shop</NavLink>
    </footer>
  );
};
export default NavBar;
