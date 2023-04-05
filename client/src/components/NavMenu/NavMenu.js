import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navmenu.module.scss";

const NavMenu = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register/users">Register</NavLink>
        </li>
        <li>
          <NavLink to="/users">User Page</NavLink>
        </li>
        <li>
          <NavLink to="/groups">Group Page</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Task Page</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
