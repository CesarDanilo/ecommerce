import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios";

const MainCarrinho = () => {
    const baseUrl = "http://localhost:3001/carrinho/";
    const [produtos, setProdutos] = useState([]);

    const buscarIdDeUsuario = () => {
        const usuarioString = localStorage.getItem("user");
        if (usuarioString) {
            const usuario = JSON.parse(usuarioString);
            return usuario.id;
        }
        return null;
    };

    const buscarDadosDoCarrinho = async () => {
        try {
            const idUsuario = buscarIdDeUsuario();
            if (!idUsuario) {
                console.log("Usuário não encontrado no localStorage");
                return;
            }

            const response = await axios.get(`${baseUrl}?usuario_id=${idUsuario}`);
            setProdutos(response.data.data); // Atualiza o estado com os produtos
            console.log("Produtos do Carrinho:", response.data.data);
        } catch (error) {
            console.log("Aconteceu alguma coisa de errado: ", error);
        }
    };

    const handleDeleteProdutos = async (id) => {
        try {
            await axios.delete(`${baseUrl}${id}`);
            buscarDadosDoCarrinho(); // Atualiza a lista de produtos
        } catch (error) {
            console.log("Não foi possível deletar o produto");
        }
    };

    const handleQuantidadeChange = (id, type) => {
        setProdutos((prevProdutos) =>
            prevProdutos.map((produto) =>
                produto.id === id
                    ? { ...produto, quantidade: type === 'increase' ? produto.quantidade + 1 : Math.max(produto.quantidade - 1, 1) }
                    : produto
            )
        );
    };

    const calularSubtotaisDosProdutos = () => {
        
    }

    useEffect(() => {
        buscarDadosDoCarrinho();
    }, []);

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
                                            R$ {produto.Produto.preco}
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

                                            <Button onClick={() => handleDeleteProdutos(produto.id)} size="small">
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
                    <Grid>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 26 }}>
                            Total
                        </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                            Sub-total
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16, display: 'flex' }}>
                            R$00,00
                        </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                            Frete
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16, display: 'flex' }}>
                            R$00,00
                        </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                            Total estimado
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: 16, display: 'flex' }}>
                            R$00,00
                        </Typography>
                    </Grid>
                    <Button variant="contained" color="success" sx={{ width: '290px' }}>comprar</Button>
                </Grid>
            </Grid>

        </Box>
    );
};

export default MainCarrinho;
