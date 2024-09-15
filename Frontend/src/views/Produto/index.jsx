import React from "react";
import NavBar from "../../Components/NavBar"
import MainProduto from "../../Components/Produto/MainProduto"
import ProdutosRelacionados from "../../Components/Produto/ProdutosRelacionados";
import Footer from "../../Components/Footer";

const Produto = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <NavBar />
            <MainProduto />
            <ProdutosRelacionados />
            <Footer />
        </div>
    )
}

export default Produto;