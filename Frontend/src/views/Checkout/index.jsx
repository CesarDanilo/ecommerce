import React from "react";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import ProdutosRelacionados from "Components/Produto/ProdutosRelacionados";

const Checkout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <NavBar />
            <ProdutosRelacionados />
            <Footer />
        </div>
    )
}

export default Checkout;