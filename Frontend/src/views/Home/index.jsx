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
        <div>
            <NavBar />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <Main />
                <Cards titulo={'MOUSE PAD SPEED'} />
                <Article />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
