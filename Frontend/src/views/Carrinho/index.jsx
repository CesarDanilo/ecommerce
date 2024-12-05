import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import MainCarrinho from "../../Components/Carrinho/MainCarrinho";
import ProdutosRelacionados from "../../Components/Produto/ProdutosRelacionados";
const Carrinho = () => {
    return (
        <div>
            <NavBar />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <MainCarrinho />
                <ProdutosRelacionados />
                <Footer />
            </div>
        </div>
    )
}

export default Carrinho;