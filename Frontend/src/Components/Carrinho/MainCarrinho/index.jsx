import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from "axios";

const MainCarrinho = () => {
    const baseUrl = "http://localhost:3001/carrinho";
    const [produtos, setProdutos] = useState([]);  // Inicializando como array

    const buscarIdDeUsuario = () => {
        const usuarioString = localStorage.getItem("user");
        if (usuarioString) {
            const usuario = JSON.parse(usuarioString); // Converte a string em objeto
            return usuario.id; // Retorna o campo 'id'
        }
        return null; // Caso não encontre o usuário
    };

    const buscarDadosDoCarrinho = async () => {
        try {
            const idUsuario = buscarIdDeUsuario();
            if (!idUsuario) {
                console.log("Usuário não encontrado no localStorage");
                return;
            }

            const response = await axios.get(`${baseUrl}?usuario_id=1`);

            // Verifica se response.data é um array, caso contrário, define como vazio
            if (Array.isArray(response.data[0])) {
                setProdutos(response.data); // Se for um array, atualiza o estado
            } else {
                setProdutos([]); // Caso contrário, define como array vazio
            }

            console.log("Produtos do Carrinho:", response.data);

        } catch (error) {
            console.log("Aconteceu alguma coisa de errado: ", error);
        }
    };

    useEffect(() => {
        buscarDadosDoCarrinho();
    }, []); // Chamando a função quando o componente for montado

    return (
        <Box
            sx={{
                maxWidth: 1000,
                margin: '0 auto',
                padding: '16px',
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    {produtos.length > 0 ? ( // Verifica se há produtos no array
                        produtos.map((produto, index) => (
                            <Grid container spacing={2} key={index}>
                                <Grid item xs={12} sm={5}>
                                    <Box sx={{ padding: 1 }}>
                                        <img
                                            src={produto.url} // Suponho que seja a URL da imagem do produto
                                            alt={produto.title} // Título do produto
                                            style={{
                                                width: '100%',
                                                borderRadius: 10,
                                            }}
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
                                            {produto.title}
                                        </Typography>

                                        <Typography variant="body1" sx={{ color: 'darkgrey', marginTop: 1 }}>
                                            {produto.description}
                                        </Typography>

                                        <Typography variant="body1" sx={{ marginTop: 1 }}>
                                            R$ {produto.preco}
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
                                                {produto.quantidade} {/* Quantidade do produto no carrinho */}
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
                        <Typography variant="body1">Carrinho vazio.</Typography> // Exibe mensagem se não houver produtos
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainCarrinho;
