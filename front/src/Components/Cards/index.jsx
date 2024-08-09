import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';

import Img from '../../img/MousePad/002.jpg';

const Cards = ({ titulo }) => {
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
                    marginTop: 5,
                    marginBottom: 3,
                    textAlign: 'center',
                }}
            >
                {titulo}
            </Typography>
            <Grid container spacing={3}>
                {[...Array(6)].map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: '100%', margin: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image={Img}
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
                                        Mouse Pad Speed
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary" mt={'1px'}>
                                        Body Text of third Product
                                    </Typography>
                                    <Typography variant="body3" color="text.primary" fontWeight="bold" mt={'2px'}>
                                        R$ 180,00
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Cards;
