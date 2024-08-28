import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios";

const ProdutosRelacionados = () => {
    const [data, setData] = useState([]); // Inicializa como array vazio
    const baseURL = "http://localhost:3001/produto/";

    const BuscarDadosProduto = async () => {
        try {
            const res = await axios.get(baseURL);
            const { data } = res.data; // Verifique a estrutura da resposta
            setData(data);
            console.log(data);
        } catch (erro) {
            console.log("não foi possível buscar os dados: ", erro);
        }
    }

    useEffect(() => {
        BuscarDadosProduto();
    }, [])

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
                    marginTop: 10,
                    marginBottom: 3,
                    textAlign: 'start',
                }}
            >
                Produtos Relacionados
            </Typography>
            <Grid container spacing={3}>
                {data.length > 0 ? (
                    data.map((i, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Link to={`/produto/${i.id}`} underline="none" color="black" fontWeight="bold">
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
                    ))
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        Nenhum produto relacionado encontrado.
                    </Typography>
                )}
            </Grid>
        </Box>
    )
}

export default ProdutosRelacionados;
