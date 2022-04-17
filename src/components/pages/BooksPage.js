import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Books from "../Books";
const BooksPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Books></Books>
      <Footer />
    </React.Fragment>
  );
};

export default BooksPage;
