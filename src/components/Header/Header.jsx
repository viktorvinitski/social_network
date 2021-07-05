import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://bcline.eu/wp-content/uploads/2017/09/facebook-Logo.png"></img>

      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
