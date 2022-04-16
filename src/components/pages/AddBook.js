import Header from "../Header";
import AddBookForm from "../AddBookForm";
import Footer from "../Footer";
import React from "react";
import { ReactFragment } from "react";

const AddBook = () => {
    return ( <React.Fragment>
        <Header></Header>
        <AddBookForm></AddBookForm>
        <Footer></Footer>
    </React.Fragment> );
}
 
export default AddBook;