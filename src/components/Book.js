import React from "react";
import styles from "./Book.module.css";
import Card from "./UI/Card";
import image from "../assets/bookImage.jpg";
const Book = (props) => {
  return (
    <div className={styles.book}>
      <header></header>
      <img src={image}></img>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Book;
