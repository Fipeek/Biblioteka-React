import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddArticle from "./components/pages/AddArticle";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
     
        <Route path="/home">
          <Header></Header>
          <Home></Home>
        </Route>
        <Route path="/xd">
          <AddArticle></AddArticle>
        </Route>

    </div>
  );
}

export default App;
