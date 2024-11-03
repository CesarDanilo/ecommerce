import React from "react";
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MousePad1 from '../../img/MousePad/17242708375909_zoom.webp';
import MousePad2 from '../../img/MousePad/Mousepad Gamer Fallen Cs Fade - Ice Grande.webp';
import MousePad3 from '../../img/MousePad/mousepadGamerFallenAce-controlGrande.jpg';
import MousePad4 from '../../img/MousePad/Mousepad Gamer Fallen Festa Candy Speed++ Grande.webp';

const Main = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '500px', 
                maxWidth: '100%', 
                p: 0,
                m: 10 
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1300px',
                    height: '500px',
                    overflow: 'hidden',
                    borderRadius: '10px'
                }}
            >
                <Slider {...settings}>
                    {[MousePad1, MousePad2, MousePad3, MousePad4].map((image, index) => (
                        <Box key={index} sx={{ position: 'relative' }}>
                            <img
                                src={image}
                                alt={`mousepad-${index + 1}`}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: '10px',
                                    objectFit: 'cover'
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'white',
                                    textAlign: 'center',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                                    p: 3 // padding interno para dar espaço
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    component="div"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                                        mb: 1 // margem inferior para espaçar o texto do botão
                                    }}
                                >
                                    MousePads 
                                </Typography>
                                <Typography
                                    component="div"
                                    sx={{
                                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                                        mb: 2 // margem inferior para espaçar o texto do botão
                                    }}
                                >
                                    Máxima precisão e conforto em cada movimento
                                </Typography>
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained"
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#262626',
                                            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                                        }}>
                                        Ver mais
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Container>
    )
}

export default Main;
