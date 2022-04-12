import React, { useState } from "react";
import styles from './Form.module.css';
import Button from "./UI/Button";
const Form = () => {
    const [author,setAuthor] = useState('');
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [articleText, setArticleText] = useState('');
    const submitHandler = (event) =>{
        event.preventDefault();
        const userData={
            author: author,
            title:title,
            date: date,
            articleText: articleText
        };
        setAuthor("");
        setTitle("");
        setDate('');
        setArticleText('');
      
    }
    const authorHandler = (event ) =>{
       setAuthor(event.target.value);
    };
    const titleHandler = (event ) =>{
        setTitle(event.target.value);
    };
    const dateHandler = (event ) =>{
        setDate(event.target.value);
    };
    const articleTextHandler = (event ) =>{
        setArticleText(event.target.value);
    };
    return ( <form className={styles.addArticle} onSubmit={submitHandler}>
        <label>Tytul</label>
        <input type='text' value={title} onChange={titleHandler}></input>
        <label>Autor</label>
        <input type='text' value={author} onChange={authorHandler}></input>
        <label>Data</label>
        <input type='date' value={date} onChange={dateHandler}></input>
        <label>Tresc artykulu</label>
        <textarea autoCapitalize="none" value={articleText} name="xd" onChange={articleTextHandler} rows="5" cols="33"></textarea>
         <Button type="submit">Zatwierdź</Button>

    </form> );
}
 
export default Form;