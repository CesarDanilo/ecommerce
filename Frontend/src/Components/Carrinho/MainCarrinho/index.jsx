import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
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

            // Verifica se response.data é um array
            const { data } = response.data;
            setProdutos(data); // Atualiza o estado com os produtos
            console.log("Produtos do Carrinho:", data);


        } catch (error) {
            console.log("Aconteceu alguma coisa de errado: ", error);
        }
    };

    console.log(produtos)

    useEffect(() => {
        buscarDadosDoCarrinho();
    }, []);

    return (
        <Box sx={{ maxWidth: 1000, margin: '0 auto', padding: '16px' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    {produtos.length > 0 ? (
                        produtos.map((produto, index) => (
                            <Grid container spacing={2} key={index}>
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
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            padding: 1,
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            {produto.Produto.nome}
                                        </Typography>

                                        <Typography variant="body1" sx={{ color: 'darkgrey', marginTop: 1 }}>
                                            {produto.Produto.descricao}
                                        </Typography>

                                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                                            R$ {produto.Produto.preco}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                marginTop: 2,
                                            }}
                                        >
                                            <Button size="small">
                                                <RemoveIcon />
                                            </Button>

                                            <Typography variant="body1" sx={{ marginLeft: 2 }}>
                                                {produto.quantidade}
                                            </Typography>

                                            <Button size="small">
                                                <AddIcon />
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
            </Grid>
        </Box>
    );
};

export default MainCarrinho;
