import React, { useState, useContext } from "react";
import styles from "./Form.module.css";
import Button from "./UI/Button";
import Backdrop from "./UI/Backdrop";
import ArticlesContext from "../store/articles-context";
import Card from "./UI/Card";
import ReactDOM from "react-dom";
const Form = () => {
  const ctx = useContext(ArticlesContext);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [articleText, setArticleText] = useState("");
  const [isFormValid, setFormValidation] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  let formValidator = true;
  const checkFormValidation = (title, author, articleText) => {
    formValidator = false;
    if (
      title.trim() === "" ||
      author.trim() === "" ||
      articleText.trim() === ""
    ) {
      formValidator = false;
      return "Nieprawidłowe dane! Wartości nie mogą być puste.";
    }
    if (
      title.length > 30 ||
      author.length > 20 ||
      articleText.lenght > 1000 ||
      articleText.length < 400
    ) {
      formValidator = false;
      return "Nieprawidłowe dane! Tytuł i autor mogą mieć maksymalnie 30 znaków, a atykuł między 400 a 1000.";
    }
    formValidator = true;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random,
      key: Math.random,
      author: author,
      title: title,
      date: date,
      articleText: articleText,
    };
    setErrorMessage(checkFormValidation(title, author, articleText));

    if (formValidator) {
      ctx.articles.push(userData);
    }
    setFormValidation(formValidator);
    setAuthor("");
    setTitle("");
    setDate("");
    setArticleText("");
  };
  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const articleTextHandler = (event) => {
    setArticleText(event.target.value);
  };
  const closeBackdrop = () => {
    setFormValidation(true);
  };


  
  return (
    <form className={styles.addArticle} onSubmit={submitHandler}>
      <label>Tytul</label>
      <input type="text" value={title} onChange={titleHandler}></input>
      <label>Autor</label>
      <input type="text" value={author} onChange={authorHandler}></input>
      <label>Data</label>
      <input type="date" value={date} onChange={dateHandler}></input>
      <label>Tresc artykulu</label>
      <textarea
        autoCapitalize="none"
        value={articleText}
        onChange={articleTextHandler}
        rows="5"
        cols="33"
      ></textarea>
      <Button type="submit">Zatwierdź</Button>
      {ReactDOM.createPortal(
        !isFormValid && (
          <Backdrop onClick={closeBackdrop}>
              <div className={styles.error}>

            <Card>
                <header>
              <h1>Zły input</h1>

                </header>
              <p >{errorMessage}</p>
            </Card>
              </div>
          </Backdrop>
        ),
        document.getElementById("backdrop-root")
      )}
   
    </form>
  );
};

export default Form;
