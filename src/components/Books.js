import React from "react";
import Book from "./Book";
import { ReactFragment, useContext } from "react";
import styles from './Books.module.css';
import BooksContext from "../store/books-context";
const Books = () => {
    const ctx = useContext(BooksContext);
    const books = ctx.books.map((book) => (<Book
    title={book.title}
    author={book.author}
    description={book.description}
    ></Book>))
  return <section className={styles.books}>
      <ul>
          {books}
      </ul>
  </section>;
};
export default Books;
