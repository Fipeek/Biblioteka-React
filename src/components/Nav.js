import React from "react";
import styles from './Nav.module.css';

const Nav = () => {
    return ( 
        <nav className={styles.navigation}>
            <ul>
                <li>Home</li>
                <li>Dodaj Ksiazke</li>
                <li>Lista ksiazek</li>
            </ul>
            <div class="hamburger">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
        </nav>
     );
}
 
export default Nav;