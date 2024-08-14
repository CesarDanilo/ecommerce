import React from "react";
import { Grid, Box, Typography, Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MainCarrinho = () => {

    const imgs = [
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/S2a0513a05487456ea2ba32dc6113cfefS.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
        { title: 'MousePad Speed', url: 'https://ae-pic-a1.aliexpress-media.com/kf/Saa92b6d67ba9470b9fa9fa4b0a6f778a6.jpg_640x640.jpg_.webp', description: 'Mousepad 40x45', preco: '180,00' },
    ];

    return (
        <Box sx={{
            maxWidth: 1000,
            margin: '0 auto',
            padding: '16px',
        }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    {imgs.map((i, index) => (
                        <Grid container spacing={2} key={index}>
                            <Grid item xs={12} sm={5}>
                                <Box sx={{ padding: 1 }}>
                                    <img src={i.url} alt={i.title} style={{
                                        width: '100%',
                                        borderRadius: 10
                                    }} />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={7}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: "flex-start",
                                    alignItems: 'flex-start',
                                    padding: 1
                                }}>
                                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                        {i.title}
                                    </Typography>

                                    <Typography variant="body1" sx={{ color: 'darkgrey', marginTop: 1 }}>
                                        {i.description}
                                    </Typography>

                                    <Typography variant="body1" sx={{ marginTop: 1 }}>
                                        R$ {i.preco}
                                    </Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: 2
                                    }}>
                                        <Button size="small">
                                            <RemoveIcon />
                                        </Button>
                                        <Typography variant="body1" sx={{ marginLeft: 2 }}>
                                            {imgs.length}
                                        </Typography>
                                        <Button size="small">
                                            <AddIcon />
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                            Total
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: 2,
                            marginTop: 2
                        }}>
                            <Box>
                                <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 2 }}>
                                    Subtotal
                                </Typography>

                                <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 1 }}>
                                    Frete
                                </Typography>

                                <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 1 }}>
                                    Total Estimado
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 2, textAlign: 'right' }}>
                                    R$ 00,00
                                </Typography>

                                <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 1, textAlign: 'right' }}>
                                    R$ 00,00
                                </Typography>

                                <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: 1, textAlign: 'right' }}>
                                    R$ 00,00
                                </Typography>
                            </Box>
                        </Box>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" sx={{ backgroundColor: 'black', width: '100%', marginTop: '25px' }}>Finalizar</Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainCarrinho;
