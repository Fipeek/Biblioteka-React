import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Articles from "../Articles";
import React from "react";
const HomePage = () => {
    return (  <React.Fragment>
        <Header/>
        <Banner/>
        <Articles/>
        <Footer></Footer>
    </React.Fragment>);
}
 
export default HomePage;