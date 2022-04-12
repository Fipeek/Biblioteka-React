import React from "react";
import styles from "./Home.module.css";
import Articles from './Articles';
import libraryImage from "../assets/books2.jpg";
import "./reset.css";
const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.backgroundImg}>
        <div className={styles.info}>
          <h1>Zadbane książki, Duży wybór</h1>
          <p>
            Wypożycz swoje ulubione książki za pomocą aplikacji webowej i ciesz
            się wspaniale spędzonym czasem
          </p>
          <p>Nasza biblioteka jest wyposażona w najrzadsze egzemplarze</p>
        </div>
      </div>
      <Articles></Articles>
    </section>
  );
};

export default Home;
<section></section>;
