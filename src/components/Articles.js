import React from "react";
import styles from "./Articles.module.css";
import Article from "./Article";
import { useContext } from "react";
import ArticlesContext from "../store/articles-context";

const Articles = () => {
  const ctx = useContext(ArticlesContext);

  const articles = ctx.articles.map((article) => (
    <Article
      id={article.id}
      // Na potrzeby aplikacji klucz obiektów jest generowany za pomocą funkcji Math.Random. W tej sytuacji
      // moze zajsc przypadek kiedy dwa obiekty maja ten sam klucz. W poważniejszych projektach należy wykluczyć powtórzenia klucza!
      key={Math.random}
      title={article.title}
      date={article.date}
      text={article.articleText}
      author={article.author}
    ></Article>
  ));
  return (
    <section className={styles.news}>
      <h1>Aktualnosci</h1>
      <ul>{articles}</ul>
    </section>
  );
};

export default Articles;
