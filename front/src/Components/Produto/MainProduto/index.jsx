import React from "react";
import { Grid, Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MainProduto = () => {
    const img = 'https://ae-pic-a1.aliexpress-media.com/kf/Sfee60a210944451ab6a6c3913ccd9069x.jpg_640x640.jpg_.webp';
    return (
        <Box sx={{
            maxWidth: 1000,
            margin: '0 auto',  // Centraliza o conteúdo
            padding: '0 16px', // Adiciona um pequeno preenchimento nas laterais
            width: '100%',     // Garante que o Box ocupe 100% da largura disponível
        }}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6} style={{
                    maxWidth: '1000px',
                    padding: 10
                }}>
                    {/* IMAGEM DO MEU PRODUTO */}
                    <div>
                        <img src={img} alt="Produto" srcset=""
                            style={
                                {
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 500
                                }
                            }
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start'
                    }
                }>
                    {/* DESCRIÇÃO E PRECO DO MEU PRODUTO */}
                    <div
                        style={
                            {
                                paddingLeft: 50
                            }
                        }
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                textAlign: 'start',
                            }}>
                            MOUSEPAD PKCONTROLL PRO
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="overline"
                            component="div"
                            sx={{
                                fontWeight: "",
                                textAlign: 'start',
                                color: "darkgray"
                            }}>
                            MousePad ideal para trabalho e gameplay competitiva
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                textAlign: 'start',
                            }}>
                            R$ 180,00
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                            sx={{
                                fontWeight: "",
                                textAlign: 'start',
                                color: "darkgray"
                            }}>
                            Tamanho 40x45 Controll
                        </Typography>

                    </div>
                    <div
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: "center",
                                paddingLeft: 40,
                                marginTop: 10
                            }
                        }
                    >
                        <ButtonGroup variant="" aria-label="Basic button group">
                            <Button><RemoveIcon /></Button>
                            <Button>2</Button>
                            <Button><AddIcon /></Button>
                        </ButtonGroup>
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                    <div
                        style={
                            {
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: "center",
                                paddingLeft: 40,
                                marginTop: 10
                            }
                        }
                    >
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" style={{ backgroundColor: 'black' }}>Adicionar ao carrinho</Button>
                            {/* <Button color="inherit"><FavoriteIcon /></Button>  vai ser usado quando clicado em favorito */}
                            <Button color="inherit"><FavoriteBorderIcon /></Button>
                        </Stack>
                    </div>
                </Grid>

            </Grid>
        </Box >
    )
}

export default MainProduto;