import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import MainCarrinho from "../../Components/Carrinho/MainCarrinho";
import ProdutosRelacionados from "../../Components/Produto/ProdutosRelacionados";
const Carrinho = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <NavBar qntProd={2} />
            <MainCarrinho />
            <ProdutosRelacionados />
            <Footer />
        </div>
    )
}

export default Carrinho;