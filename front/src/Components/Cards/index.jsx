import React, { useEffect, useState } from "react"; // Adicionei o useState
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import axios from "axios";
import Produto from "../Produto/MainProduto";

const Cards = ({ titulo }) => {
    const [data, setData] = useState([]);

    const baseURL = "http://localhost:3001/produto";

    const BuscarDados = async () => {
        try {
            const res = await axios.get(baseURL); // Corrigido para usar baseURL
            const { data: produtos } = res.data; // Renomeado para evitar conflito
            setData(produtos);
            console.log(produtos);
        } catch (error) {
            console.log("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        BuscarDados();
    }, []);

    return (
        <Box
            sx={{
                maxWidth: 1000,
                margin: '0 auto',
                padding: '0 16px',
                width: '100%',
            }}
        >
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                    fontWeight: "bold",
                    marginTop: 5,
                    marginBottom: 3,
                    textAlign: 'center',
                }}
            >
                {titulo}
            </Typography>
            <Grid container spacing={3}>
                {data.map((i, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Link to={`/produto/${i.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <Card sx={{ maxWidth: '100%', margin: 'auto' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="190"
                                        image={`http://localhost:3001/uploads/${i.imagem}`}
                                        alt="mouse pad"
                                    />
                                    <CardContent
                                        sx={{
                                            textAlign: 'left',
                                            padding: '15px',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Typography gutterBottom component="div" fontWeight="bold" mt={'2px'}>
                                            {i.nome}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mt={'1px'}>
                                            {i.descricao}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary" fontWeight="bold" mt={'2px'}>
                                            {`R$ ${i.preco}`}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Cards;
