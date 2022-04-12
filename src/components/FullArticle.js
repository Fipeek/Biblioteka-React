import React, { useState } from "react";
import styles from "./FullArticle.module.css";
import Card from "./UI/Card";
import Backdrop from "./UI/Backdrop";
import  ReactDOM  from "react-dom";
const FullArticle = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}>
        <div className={styles.fullArticle}>
          <Card>
            <div className={styles.image}></div>
            <div>
              <h1>{props.title}</h1>
              <h2>{props.date}</h2>
              <span>{props.author}</span>
              <p>{props.text}</p>
              <span className={styles.close}>X</span>
            </div>
          </Card>
        </div>
      </Backdrop>,document.getElementById('backdrop-root'))}
      
    </div>
  );
};

export default FullArticle;
