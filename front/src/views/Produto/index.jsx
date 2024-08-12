import React from "react";
import NavBar from "../../Components/NavBar"
import MainProduto from "../../Components/Produto/MainProduto"

const Produto = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <NavBar />
            <MainProduto />
        </div>
    )
}

export default Produto;