import React from "react";
import styles from './Header.module.css';
import Nav from "./Nav";
import Hamburger from "./Hamburger";
const Header = () => {
    return(<header className={styles.navbar}>
        <div className={styles.logo}></div>
        <h1>Biblioteka React</h1>
        <Hamburger> </Hamburger>
        <Nav></Nav>
        
    </header>);
}
export default Header;