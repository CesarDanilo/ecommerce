import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios";

const MainCarrinho = () => {
    const baseUrl = "http://localhost:3001/carrinho/";
    const [produtos, setProdutos] = useState([]);
    const [totalProdutos, setTotalProdutos] = useState(0);
    const [frete, setFrete] = useState({ valor: 0, prazo: 0, empresa: "" });
    const [cepDestino, setCepDestino] = useState("");
    const [erroFrete, setErroFrete] = useState(""); // Estado para erro no cálculo do frete

    // Função para buscar ID do usuário no localStorage
    const buscarIdDeUsuario = () => {
        const usuarioString = localStorage.getItem("user");
        if (usuarioString) {
            const usuario = JSON.parse(usuarioString);
            return usuario.id;
        }
        return null;
    };

    // Formatação para valores monetários
    // Função para formatação de moeda com vírgula como separador decimal
    const formataMoeda = (valor) => {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).replace("R$", "R$ ").replace(".", ",");
    };


    // Buscar dados do carrinho para o usuário
    const buscarDadosDoCarrinho = async () => {
        try {
            const idUsuario = buscarIdDeUsuario();
            if (!idUsuario) {
                console.error("Usuário não encontrado no localStorage");
                return;
            }

            const response = await axios.get(`${baseUrl}?usuario_id=${idUsuario}`);
            setProdutos(response.data.data || []);
        } catch (error) {
            console.error("Erro ao buscar dados do carrinho: ", error);
        }
    };

    // Excluir produto do carrinho
    const handleDeleteProduto = async (id) => {
        try {
            await axios.delete(`${baseUrl}${id}`);
            buscarDadosDoCarrinho(); // Atualiza a lista de produtos
        } catch (error) {
            console.error("Erro ao excluir produto: ", error);
        }
    };

    // Alterar quantidade do produto
    const handleQuantidadeChange = (id, type) => {
        setProdutos((prevProdutos) =>
            prevProdutos.map((produto) =>
                produto.id === id
                    ? { ...produto, quantidade: type === 'increase' ? produto.quantidade + 1 : Math.max(produto.quantidade - 1, 1) }
                    : produto
            )
        );
    };

    // Calcular o total dos produtos no carrinho
    const calcularTotalProdutos = () => {
        const total = produtos.reduce((acc, produto) => {
            return acc + produto.Produto.preco * produto.quantidade;
        }, 0);

        setTotalProdutos(total);
    };

    // Calcular frete
    const calcularFrete = () => {
        if (!cepDestino || cepDestino.length !== 8 || isNaN(cepDestino)) {
            setErroFrete("Por favor, informe um CEP válido com 8 dígitos.");
            return;
        }

        const options = {
            method: 'POST',
            url: 'http://localhost:3001/calculate-shipment',
            data: {
                from: { postal_code: '96020360' },
                to: { postal_code: cepDestino },
                products: produtos.map((produto) => ({
                    id: produto.id,
                    width: produto.Produto.largura,
                    height: produto.Produto.altura,
                    length: produto.Produto.comprimento,
                    weight: produto.Produto.peso,
                    insurance_value: produto.Produto.preco,
                    quantity: produto.quantidade
                }))
            }
        };

        axios.request(options)
            .then(res => {
                console.log("Resposta da API de frete:", res.data);
                if (res.data && Array.isArray(res.data) && res.data.length > 0) {
                    const melhorOpcao = res.data.sort((a, b) => a.price - b.price)[0];
                    setFrete({
                        valor: melhorOpcao.custom_price,
                        prazo: melhorOpcao.delivery_time,
                        empresa: melhorOpcao.company.name
                    });
                    setErroFrete(""); // Limpa erros caso o cálculo seja bem-sucedido
                } else {
                    setErroFrete("Não foi possível calcular o frete para o CEP informado.");
                }
            })
            .catch(err => {
                console.error("Erro ao calcular frete:", err);
                setErroFrete("Erro ao calcular o frete. Tente novamente mais tarde.");
            });
    };

    useEffect(() => {
        buscarDadosDoCarrinho();
    }, []);

    useEffect(() => {
        calcularTotalProdutos();
    }, [produtos]);

    return (
        <Box sx={{ maxWidth: 1000, margin: '0 auto', padding: '16px', display: 'flex' }}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                    {produtos.length > 0 ? (
                        produtos.map((produto) => (
                            <Grid container spacing={2} key={produto.id}>
                                <Grid item xs={12} sm={5}>
                                    <Box sx={{ padding: 1 }}>
                                        <img
                                            src={`http://localhost:3001/uploads/${produto.Produto.imagem}`}
                                            alt={produto.Produto.descricao}
                                            style={{ width: '100%', borderRadius: 10 }}
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={7}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start',
                                        padding: 1,
                                    }}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 18 }}>
                                            {produto.Produto.nome}
                                        </Typography>

                                        <Typography variant="body1" sx={{ color: 'darkgrey', marginTop: 1, fontSize: 14 }}>
                                            {produto.Produto.descricao}
                                        </Typography>

                                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                                            {formataMoeda(produto.Produto.preco)}
                                        </Typography>

                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: 2,
                                        }}>
                                            <Button onClick={() => handleQuantidadeChange(produto.id, 'decrease')} size="small">
                                                <RemoveIcon />
                                            </Button>

                                            <Typography variant="body1" sx={{ marginLeft: 2 }}>
                                                {produto.quantidade}
                                            </Typography>

                                            <Button onClick={() => handleQuantidadeChange(produto.id, 'increase')} size="small">
                                                <AddIcon />
                                            </Button>

                                            <Button onClick={() => handleDeleteProduto(produto.id)} size="small">
                                                <DeleteIcon />
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body1">Carrinho vazio.</Typography>
                    )}
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2, height: 'fit-content', width: '380px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 26 }}>
                            Total
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                Sub-total
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                {formataMoeda(totalProdutos)}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                Frete
                            </Typography>
                            <TextField
                                size="small"
                                value={cepDestino}
                                onChange={(e) => setCepDestino(e.target.value)}
                                placeholder="Digite o CEP"
                                sx={{ width: '150px' }}
                            />
                            <Button variant="contained" color="success" onClick={calcularFrete}>
                                Calcular
                            </Button>
                        </Box>
                        {erroFrete && (
                            <Typography variant="body2" sx={{ color: 'red', marginTop: 1 }}>
                                {erroFrete}
                            </Typography>
                        )}
                        {frete.valor > 0 && (
                            <>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                        Valor do Frete
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                        {formataMoeda(frete.valor)}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                        Prazo de Entrega
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                        {frete.prazo} dias
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                        Transportadora
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                        {frete.empresa}
                                    </Typography>
                                </Box>
                            </>
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                Total estimado
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                {formataMoeda(totalProdutos + parseFloat(frete.valor))}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                Método de pagamento
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                                PIX/QRCODE
                            </Typography>
                        </Box>
                        <a href="/checkout">
                            <Button variant="contained" color="success" sx={{ width: '290px', marginTop: 2 }}>Comprar</Button>
                        </a>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainCarrinho;
