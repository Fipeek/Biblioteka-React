import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ReactFragment } from "react";
import Book from "../Book";
import Books from "../Books";
const BooksPage = () => {
    return ( 
        <div>
            <Header/>
                <Books></Books>
            <Footer/>
        </div>
    );
}
 
export default BooksPage;