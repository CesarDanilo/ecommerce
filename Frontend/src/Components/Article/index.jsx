import React from "react";
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import MousePad from '../../img/MousePad/003.jpg';

const ProductCard = ({ image, title, description, price }) => (
    <Grid xs={6} display="flex" flexDirection="column">
        <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
        <Typography gutterBottom component="div" fontWeight="bold" mt={2}>
            {title}
        </Typography>
        <Typography variant="body3" color="text.secondary" mt={1}>
            {description}
        </Typography>
        <Typography variant="body3" color="text.primary" fontWeight="bold" mt={2}>
            {price}
        </Typography>
    </Grid>
);

const Article = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                justifyContent: 'center',
                margin: 12
            }}
        >
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", marginTop: 5, marginBottom: 3 }}
            >
                MOUSE PADS CONTROLS
            </Typography>
            <Box sx={{ height: '100%' }}>
                <Grid container spacing={2}>
                    <ProductCard
                        image={MousePad}
                        title="Mouse Pad Control"
                        description="Body Text of third Product"
                        price="R$ 180,00"
                    />
                    <ProductCard
                        image={MousePad}
                        title="Mouse Pad Control"
                        description="Body Text of third Product"
                        price="R$ 180,00"
                    />
                </Grid>
            </Box>
        </Container>
    );
}

export default Article;
