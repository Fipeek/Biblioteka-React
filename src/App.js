import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddArticle from "./components/pages/AddArticle";
import { Route } from "react-router-dom";
import ArticlesContext from "./store/articles-context";
import BooksPage from "./components/pages/BooksPage";
import BooksContext from "./store/books-context";
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
    author: "Adam Małysz",
  },
];
function App() {
  return (
    <ArticlesContext.Provider
    value={{articles:[{
      id: "1",
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
        author: "Adam Małysz",
      },]}}>
      <BooksContext.Provider
       value={{ books: [{
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      },
      {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      },
      {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      }, {
        key: 1,
        title: "tytul",
        author: "Autor",
        description: "opis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opisopis opisopisopisopis opis opis opis",
      },]}}>

      <Route path="/home">
        <Header></Header>
        <Home></Home>
      </Route>
      <Route path="/addArticle">
        <AddArticle></AddArticle>
      </Route>
      <Route path="/BooksPage">
        <BooksPage></BooksPage>
      </Route>
      </BooksContext.Provider>
    </ArticlesContext.Provider>
  );
}

export default App;
