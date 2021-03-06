import React from "react";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import { Route, Redirect } from "react-router-dom";
import ArticlesContext from "./store/articles-context";
import BooksPage from "./components/pages/BooksPage";
import BooksContext from "./store/books-context";
import AddBookPage from "./components/pages/AddBookPage";
import AddArticlePage from "./components/pages/AddArticlePage";
const DUMMY_ARTICLES = [
  {
    id: "",
    key: 1,
    title: "Title",
    date: "24.02.2022",
    articleText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Jan Kowalski",
  },
  {
    id: "2",
    key: 2,
    title: "Title",
    date: "21.02.2022",
    articleText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Tomasz Adamski",
  },
  {
    id: "3",
    key: 3,
    title: "Title",
    date: "20.02.2022",
    articleText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Adam Ma??ysz",
  },
];
const DUMMY_BOOKS = [
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
  {
    key: Math.random,
    title: "tytul",
    author: "Autor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit sodales dui id rhoncus. Vivamus accumsan vitae nibh vitae porta. Phasellus maximus sit amet est nec suscipit. Cras sed nisi in massa bibendum egestas. In congue tortor vestibulum varius commodo. Duis pellentesque neque in ex consectetur, et venenatis erat dignissim.",
  },
];
function App() {
  return (
    <ArticlesContext.Provider
      value={{
        articles: DUMMY_ARTICLES,
      }}
    >
      <BooksContext.Provider
        value={{
          books: DUMMY_BOOKS,
        }}
      >
        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
       <HomePage></HomePage>
        </Route>
        <Route path="/addArticle">
          <AddArticlePage></AddArticlePage>
        </Route>
        <Route path="/BooksPage">
          <BooksPage></BooksPage>
        </Route>
        <Route path="/AddBook">
          <AddBookPage></AddBookPage>
        </Route>
      </BooksContext.Provider>
    </ArticlesContext.Provider>
  );
}

export default App;
