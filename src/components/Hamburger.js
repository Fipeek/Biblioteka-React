import React, {useState} from "react";
import styles from './Hamburger.module.css';
import './reset.css';
const Hamburger = (props) => {
    return ( <div onClick={props.onClick} className={`${styles['hamburger']} ${props.burgerState && styles.active}`}>
      <div></div>
      <div></div>
      <div></div>
    </div> );
}
 
export default Hamburger;