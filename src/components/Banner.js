import React from "react";
import styles from "./Banner.module.css";
import "./reset.css";
const Banner = () => {
  return (
    <section className={styles.Banner}>
      <div className={styles.backgroundImg}>
        <div className={styles.info}>
          <h1>Dodawaj swoje ulubione artykuly i książki</h1>
          <p>
            Pokazuj znajomym przeczytanie książki i artykuły w formie aplikacji webowej
          </p>
          <p>Nasza strona oferuje pełen wachlarz możliwości</p>
        </div>
      </div>

    </section>
  );
};
export default Banner;
