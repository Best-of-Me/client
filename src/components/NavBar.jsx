import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <footer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/speedHelp">Speed Help</NavLink>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/shop">Shop</NavLink>
    </footer>
  );
};
export default NavBar;
