import React from 'react';
import Styles from "../App.module.scss";

const NavBar = () => {
  return (
    <div className={Styles.navBar}>
        <div>Welcome to the Message Board</div>
        <div>Menu</div>
    </div>
  )
}

export default NavBar