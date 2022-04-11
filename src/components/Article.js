import Card from "./UI/Card";
import styles from "./Article.module.css";
import articleImg from "../assets/article.jpeg";
import Button from "./UI/Button";
import { useState } from "react";
const Article = (props) => {
    const makeTextShorter = (text) =>{
    let shorterText = text;
        shorterText=shorterText.slice(0,500);
        return shorterText;
    }
    const [isArticleClicked,setArticleClicked] = useState(false);
    const articleClickHandler = () =>{
      setArticleClicked(!isArticleClicked);
    }
    const shorterText = makeTextShorter(props.text) +" . . . ";
  return (
      <Card>
   
    <div className={styles.article}>
      <img src={articleImg}></img>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <p>{shorterText}</p>
        <Button onClick={articleClickHandler}>Czytaj więcej</Button>
      </div>
      
    </div>
    </Card>


   
  );
};

export default Article;
