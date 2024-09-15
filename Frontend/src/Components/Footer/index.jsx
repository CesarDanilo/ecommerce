import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Container maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                justifyContent: 'center',
                margin: 12
            }}>
            <Box sx={{ height: '100%' }}>
                <Grid container spacing={2}>
                    <Grid xs={6} display="flex" flexDirection={'column'}>
                        <Typography gutterBottom variant="h4" fontWeight="" mt={2} textAlign={'left'} mb={8}>
                            PALACE
                        </Typography>
                        <Grid display={'flex'} alignItems={'flex-start'} >
                            <FacebookIcon style={{ marginRight: '10px' }} />
                            <LinkedInIcon style={{ marginRight: '10px' }} />
                            <YouTubeIcon style={{ marginRight: '10px' }} />
                            <InstagramIcon style={{ marginRight: '10px' }} />
                        </Grid>
                    </Grid>
                    <Grid xs={6} display="flex" flexDirection={'column'}>
                        <Typography gutterBottom variant="p" fontWeight="bold" fontSize={18} textAlign={'center'} mb={2}>
                            © Palace 2024. Todos os direitos reservados. <br />
                            <Typography gutterBottom variant="p" fontWeight="bold" fontSize={15} textAlign={'left'} mb={8}>
                                Desempenho Máximo para Gamers Profissionais.
                            </Typography>
                        </Typography>
                        <Typography gutterBottom variant="p" fontWeight="" fontSize={15} textAlign={'center'} mb={8}>
                            Na Palace, entendemos que cada milissegundo conta.
                            Nossos mouse pads são desenvolvidos com foco em precisão extrema,
                            velocidade e durabilidade, atendendo às demandas dos gamers profissionais
                            que não podem se dar ao luxo de errar.
                            Cada detalhe foi pensado para proporcionar uma experiência de jogo superior,
                            garantindo que suas habilidades sejam refletidas com total fidelidade.
                            Eleve seu nível de jogo com os melhores acessórios do mercado.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}

export default Footer;