import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MainProduto = () => {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [descricao, setDescricao] = useState("");
    const [img, setImg] = useState(null);
    const [quantidade, setQuantidade] = useState(1);
    const { id } = useParams();

    const baseUrl = "http://localhost:3001/produto/?id=";

    const BuscarDadosProduto = async () => {
        try {
            const res = await axios.get(`${baseUrl}${id}`);
            const { data } = res.data;
            setNome(data[0].nome);
            setPreco(data[0].preco);
            setEstoque(data[0].estoque);
            setDescricao(data[0].descricao);
            setImg(data[0].imagem);
        } catch (error) {
            console.log("Não foi possível buscar os dados:", error);
        }
    };

    const adicionarProdutoAoCarrinho = () => {
        window.alert("Ola")
    }

    useEffect(() => {
        BuscarDadosProduto();
    }, [id]);

    const handleQuantidadeChange = (type) => {
        setQuantidade((prevQuantidade) =>
            type === 'increase' ? prevQuantidade + 1 : prevQuantidade > 1 ? prevQuantidade - 1 : 1
        );
    };

    return (
        <Box sx={{
            maxWidth: 1000,
            margin: '0 auto',
            padding: '0 16px',
            width: '100%',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={{ maxWidth: '1000px', padding: 10 }}>
                    {/* IMAGEM DO PRODUTO */}
                    <div>
                        {img ? (
                            <img
                                alt={nome}
                                src={`http://localhost:3001/uploads/${img}`}
                                style={{ width: '100%', borderRadius: 10, height: 500 }}
                            />
                        ) : (
                            <Typography>Carregando imagem...</Typography>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start'
                }}>
                    {/* DESCRIÇÃO E PREÇO DO PRODUTO */}
                    <div style={{ paddingLeft: 50 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold", textAlign: 'start' }}>
                            {nome.toUpperCase()}
                        </Typography>
                        <Typography gutterBottom variant="overline" component="div" sx={{ textAlign: 'start', color: "darkgray" }}>
                            {descricao}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: "bold", textAlign: 'start' }}>
                            R$ {preco}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ textAlign: 'start', color: "darkgray" }}>
                            {`Em estoque: ${estoque}`}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: "center", paddingLeft: 40, marginTop: 10 }}>
                        <ButtonGroup variant="outlined" aria-label="Botão de quantidade" style={{ marginRight: 20 }}>
                            <Button onClick={() => handleQuantidadeChange('decrease')} variant="contained" style={{ backgroundColor: 'black' }}><RemoveIcon /></Button>
                            <Button variant="contained" style={{ backgroundColor: 'black' }}>{quantidade}</Button>
                            <Button onClick={() => handleQuantidadeChange('increase')} variant="contained" style={{ backgroundColor: 'black' }}><AddIcon /></Button>
                        </ButtonGroup>
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: "center", paddingLeft: 40, marginTop: 10 }}>
                        <Stack spacing={2} direction="row">
                            <Button onClick={adicionarProdutoAoCarrinho} variant="contained" style={{ backgroundColor: 'black' }} >Adicionar ao carrinho</Button>
                            <Button color="inherit"><FavoriteBorderIcon /></Button>
                        </Stack>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainProduto;
