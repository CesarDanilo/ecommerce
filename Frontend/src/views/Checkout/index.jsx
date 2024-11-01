import React from "react";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import ProdutosRelacionados from "Components/Produto/ProdutosRelacionados";
import CheckoutPagamento from "Components/Checkout";
const Checkout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <NavBar />
            <CheckoutPagamento />
            <ProdutosRelacionados />
            <Footer />
        </div>
    )
}

export default Checkout;