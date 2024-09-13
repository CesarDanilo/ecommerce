import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar";
import Main from "../../Components/Main";
import Cards from "../../Components/Cards";
import Article from "../../Components/Article";
import Footer from "../../Components/Footer";

const Home = () => {

    const usuarioAdmin = async () => {
        const dadosDoUsuarioStorage = localStorage.getItem('userData')
        const dadosDoUsuario = JSON.parse(dadosDoUsuarioStorage)
    }

    useEffect(() => {
        usuarioAdmin()
    }, [])

    return (

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <NavBar qntProd={5} />
            <Main />
            <Cards titulo={'MOUSE PAD SPEED'} />
            <Article />
            <Footer />
        </div>
    );
}

export default Home;
