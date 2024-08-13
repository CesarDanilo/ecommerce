import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Logo from '../../img/Logo/padpalace.png';

const NavBar = () => {

    // ICONE CARRINHO 
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 5,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <Grid container spacing={2} sx={{ padding: '0 16px', margin: '10px 0px' }}>
            <Grid item xs={12} sm={4} md={2}>
                <Link href="/" underline="none" color="black" fontWeight="bold">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: "10px",
                        }}
                    >
                        <img src={Logo} alt="Logo" style={{ maxWidth: '100%', height: '80px' }} />
                    </Box>
                </Link>
            </Grid>
            <Grid item xs={12} sm={8} md={9.5}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        padding: "10px 0",
                        typography: 'body1',
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button>
                            <Link href="/" underline="none" color="black" fontWeight="bold">
                                {'HOME'}
                            </Link>
                        </Button>
                        <Button>
                            <Link href="#" underline="none" color="black" fontWeight="bold">
                                {'CONTATO'}
                            </Link>
                        </Button>
                        <Link href="/carrinho" underline="none" color="black" fontWeight="bold">
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </Link>
                        <Button>
                            <Link href="#" underline="none" color="black" fontWeight="bold">
                                <Avatar sx={{ bgcolor: deepPurple[500] }}>C</Avatar>
                            </Link>
                        </Button>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
}

export default NavBar;
