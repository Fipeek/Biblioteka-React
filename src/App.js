import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddArticle from "./components/pages/AddArticle";
import { Route } from "react-router-dom";
import ArticlesContext from "./store/articles-context";
function App() {
  return (
    <ArticlesContext.Provider
    value={{articles:[]}}>
      {/* <Header></Header>
        <Home></Home> */}
      <Route path="/home">
        <Header></Header>
        <Home></Home>
      </Route>
      <Route path="/addArticle">
        <AddArticle></AddArticle>
      </Route>
    </ArticlesContext.Provider>
  );
}

export default App;
