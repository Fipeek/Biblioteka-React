import React, {useState} from "react";
import styles from './Nav.module.css';
import './reset.css';

const Nav = (props) => {
    console.log(props.burgerState);
    return ( 
        <nav       className={`${styles['navigation']} ${props.burgerState && styles.active}`}>
            <ul>
                <li>Home</li>
                <li>Dodaj Ksiazke</li>
                <li>Lista ksiazek</li>
            </ul>
        
        </nav>
     );
}
 
export default Nav;