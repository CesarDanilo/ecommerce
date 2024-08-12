import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';

const ProdutosRelacionados = () => {
    const imgs = [
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/S2a0513a05487456ea2ba32dc6113cfefS.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/Saa92b6d67ba9470b9fa9fa4b0a6f778a6.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/Sfee60a210944451ab6a6c3913ccd9069x.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
    ];
    return (
        <Box
            sx={{
                maxWidth: 1000,
                margin: '0 auto',  // Centraliza o conteúdo
                padding: '0 16px', // Adiciona um pequeno preenchimento nas laterais
                width: '100%',     // Garante que o Box ocupe 100% da largura disponível
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
                {imgs.map((i, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '100%', margin: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={i.url}
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
                                        {i.title}
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary" mt={'1px'}>
                                        {i.description}
                                    </Typography>
                                    <Typography variant="body3" color="text.primary" fontWeight="bold" mt={'2px'}>
                                        {`R$ ${i.preco}`}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ProdutosRelacionados;