import React from "react";
import { Grid, Box, Typography } from '@mui/material';

const MainCarrinho = () => {

    const imgs = [
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/S2a0513a05487456ea2ba32dc6113cfefS.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/Saa92b6d67ba9470b9fa9fa4b0a6f778a6.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/Sfee60a210944451ab6a6c3913ccd9069x.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/S6f1371e669d04edd845df2aa233f057da.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/S701f9c0cae3d44fa9d68c6a86afcc483N.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/S32fc521b993641eaaf6504a2f62dac92i.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' }
    ];

    return (
        <Box sx={{
            maxWidth: 1000,
            margin: '0 auto',  // Centraliza o conteúdo
            padding: '0 16px', // Adiciona um pequeno preenchimento nas laterais
            width: '100%',     // Garante que o Box ocupe 100% da largura disponível
        }}>
            <Grid container spacing={2} >
                <Grid xs={12} sm={6} style={{
                    maxWidth: '1000px',
                    display: 'flex',
                    padding: 10,
                    backgroundColor: 'brown'
                }}>
                    {/* ABAIXO O GRID DA IMG */}
                    <Grid xs={12} sm={6} style={{
                        maxWidth: '200px',
                        padding: 10
                    }}>
                        <div >
                            <img src={imgs[0].url} alt="" srcset="" style={
                                {
                                    width: '100%'
                                }
                            } />
                        </div>

                    </Grid>

                    {/* Abaixo para o texto do produto */}
                    <Grid xs={12} sm={6} style={{
                        maxWidth: '500px',
                        padding: 10,
                        display: 'flex',
                        justifyContent: 'start',
                        textAlign: 'start'
                        // backgroundColor: 'MenuText'
                    }}>
                        <Typography
                            gutterBottom
                            variant="p"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                marginTop: 5,
                                marginBottom: 3,
                                textAlign: 'center',
                            }}
                        >
                            titulo
                        </Typography>


                    </Grid>


                </Grid>
                {/* <Grid item xs={12} sm={6} style={{
                    maxWidth: '1300px',
                    padding: 10,
                    backgroundColor: 'brown'
                }}>

                </Grid> */}
            </Grid>
        </Box>
    )
}

export default MainCarrinho;