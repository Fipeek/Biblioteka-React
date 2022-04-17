import Header from "../Header";
import AddArticleForm from "../AddArticleForm";
import React from "react";
import Footer from "../Footer";
const AddArticlePage = () => {
    return ( 
        <React.Fragment>
            <Header></Header>
            <AddArticleForm></AddArticleForm>
        <Footer></Footer>
        </React.Fragment>
     );
}
 
export default AddArticlePage;