import React from "react";
import styles from "./Articles.module.css";
import Article from "./Article";
import Card from "./UI/Card";
import { useContext } from "react";
import ArticlesContext from "../store/articles-context";
const DUMMY_ARTICLES = [
  {
    id: "1",
    title: "Title",
    date: "24.02.2022",
    articleText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Jan Kowalski"
  },
  {
    id: "2",
    title: "Title",
    date: "21.02.2022",
    articleText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Tomasz Adamski"
  },
  {
    id: "3",
    title: "Title",
    date: "20.02.2022",
    articleText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "Adam Małysz"
  },
];

const News = () => {
  const ctx = useContext(ArticlesContext);
  console.log(DUMMY_ARTICLES[0].articleText.length);
    const articles = ctx.articles.map((article)=>(
        <Article id={article.id} title={article.title} date={article.date} text={article.articleText} author={article.author}></Article>
    ))
  return (
    <section className={styles.news}>
      <h1>Aktualnosci</h1>
   
      <ul>{ articles}</ul>

    </section>
  );
};

export default News;
