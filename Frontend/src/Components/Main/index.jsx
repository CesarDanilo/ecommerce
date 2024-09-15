import React from "react";
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import MousePad from '../../img/MousePad/003.jpg';

const Main = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: '400px',      // Altura do Container
                maxWidth: '100%',     // Garante que o Container ocupe 100% da largura disponível
                p: 0,                 // Remove o padding do Container
                m: 10                  // Remove a margem do Container
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1300px',  // Limita a largura máxima para 1300px
                    height: '500px',
                    overflow: 'hidden',  // Garante que o conteúdo fique dentro dos limites
                    borderRadius: '10px'
                }}
            >
                <img
                    src={MousePad}
                    alt="mousepad"
                    style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '10px',
                        objectFit: 'cover'
                    }}
                />
                <Typography
                    variant="h3"
                    component="div"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                        fontWeight: 'bold',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Responsivo
                    }}
                >
                    Mouse Pads
                </Typography>
                <Typography
                    component="div"
                    sx={{
                        position: 'absolute',
                        top: '60%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' }, // Responsivo
                    }}
                >
                    Máxima precisão e conforto em cada movimento
                </Typography>
                <Stack spacing={2} direction="row"
                    sx={{
                        position: 'absolute',
                        top: '70%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                    <Button variant="contained"
                        sx={{
                            color: 'white',
                            backgroundColor: '#262626',
                            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, // Responsivo
                        }}>
                        Ver mais
                    </Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default Main;
