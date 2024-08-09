import React from "react";
import NavBar from "../../Components/NavBar";
import Main from "../../Components/Main";
import Cards from "../../Components/Cards";
import Article from "../../Components/Article";
import Footer from "../../Components/Footer";

const Home = () => {
    return (

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <NavBar />
            <Main />
            <Cards titulo={'MOUSE PAD SPEED'} />
            <Article />
            <Footer />
        </div>
    );
}

export default Home;
