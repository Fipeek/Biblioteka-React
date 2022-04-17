import React, { useState } from "react";
import styles from "./Header.module.css";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import "./reset.css";
const Header = () => {
  const [isBurgerClicked, setBurgerClicked] = useState(false);
  const burgerClickHandler = () => {
    setBurgerClicked(!isBurgerClicked);
  };
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}></div>
      <h1>Biblioteka React</h1>
      <Hamburger onClick={burgerClickHandler} burgerState={isBurgerClicked}>
        {" "}
      </Hamburger>
      <Nav burgerState={isBurgerClicked}></Nav>
    </header>
  );
};
export default Header;
