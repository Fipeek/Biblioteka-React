import React, { useState } from "react";
import styles from "./Nav.module.css";
import "./reset.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav
      className={`${styles["navigation"]} ${
        props.burgerState && styles.active
      }`}
    >
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to='/addArticle'> Dodaj Atykul</Link>
        </li>
        <li>
          <Link to="/addBook"> Dodaj Ksiazke</Link>
        </li>
        <li>
          <Link to='/BooksPage'>Lista ksiazek </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
