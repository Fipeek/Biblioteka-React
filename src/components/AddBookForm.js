import React from "react";
import styles from "./Form.module.css";
import BooksContext from "../store/books-context";
import Button from "./UI/Button";
import { useContext, useState } from "react";
import Card from "./UI/Card";
import ReactDOM from "react-dom";
import Backdrop from "./UI/Backdrop";

const AddBookForm = () => {
  const ctx = useContext(BooksContext);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setFormValidation] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  let formValidator = true; 
  const checkFormValidation = (title, author, description) => { // sprawdzenie czy input jest poprawny
    formValidator = false;
    if (
      title.trim() === "" ||
      author.trim() === "" ||
      description.trim() === ""
    ) {
      formValidator = false;
      return "Nieprawidłowe dane! Wartości nie mogą być puste.";
    }
    if (title.length > 30 || author.length > 20 || description.length > 100) {
      formValidator = false;
      return "Nieprawidłowe dane! Tytuł i autor mogą mieć maksymalnie 30 znaków, a opis 100.";
    }
    formValidator = true;
    return "";
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setErrorMessage(checkFormValidation(title, author, description));
    setFormValidation(formValidator);
    if (formValidator) {
      const book = {
        key: Math.random,
        author: author,
        title: title,
        description: description,
      };
      ctx.books.push(book);
    } else {
      console.log(errorMessage);
    }
    setAuthor("");
    setTitle("");
    setDescription("");
  };
  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const descriptionTextHandler = (event) => {
    setDescription(event.target.value);
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
      <label>Tresc opisu</label>
      <textarea
        autoCapitalize="none"
        value={description}
        onChange={descriptionTextHandler}
        rows="5"
        cols="20"
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
                <p>{errorMessage}</p>
              </Card>
            </div>
          </Backdrop>
        ),
        document.getElementById("backdrop-root")
      )}
    </form>
  );
};

export default AddBookForm;
