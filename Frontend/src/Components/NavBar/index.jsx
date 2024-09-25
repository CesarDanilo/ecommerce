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

const NavBar = ({ qntProd }) => {

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
        // <Grid container spacing={2} sx={{ padding: '0 16px', margin: '10px 0px' }}>
        //     <Grid item xs={12} sm={4} md={2}>
        //         <Link href="/" underline="none" color="black" fontWeight="bold">
        //             <Box
        //                 sx={{
        //                     display: 'flex',
        //                     justifyContent: 'center',
        //                     alignItems: 'center',
        //                     padding: "10px",
        //                 }}
        //             >
        //                 <img src={Logo} alt="Logo" style={{ maxWidth: '100%', height: '80px' }} />
        //             </Box>
        //         </Link>
        //     </Grid>
        //     <Grid item xs={12} sm={8} md={9.5}>
        //         <Box
        //             sx={{
        //                 display: 'flex',
        //                 flexWrap: 'wrap',
        //                 justifyContent: 'flex-end',
        //                 alignItems: 'center',
        //                 padding: "10px 0",
        //                 typography: 'body1',
        //             }}
        //         >
        //             <Stack direction="row" spacing={2} alignItems="center">
        //                 <Button>
        //                     <Link href="/" underline="none" color="black" fontWeight="bold">
        //                         {'HOME'}
        //                     </Link>
        //                 </Button>
        //                 <Button>
        //                     <Link href="http://localhost:5173/" underline="none" color="black" fontWeight="bold">
        //                         {'DASHBOARD'}
        //                     </Link>
        //                 </Button>
        //                 <Button>
        //                     <Link href="#" underline="none" color="black" fontWeight="bold">
        //                         {'CONTATO'}
        //                     </Link>
        //                 </Button>
        //                 <Link href="/carrinho" underline="none" color="black" fontWeight="bold">
        //                     <IconButton aria-label="cart">
        //                         <StyledBadge badgeContent={qntProd} color="secondary">
        //                             <ShoppingCartIcon />
        //                         </StyledBadge>
        //                     </IconButton>
        //                 </Link>
        // <Button>
        //     <Link href="#" underline="none" color="black" fontWeight="bold">
        //         <Avatar sx={{ bgcolor: deepPurple[500] }}>C</Avatar>
        //     </Link>
        // </Button>
        //             </Stack>
        //         </Box>
        //     </Grid>
        // </Grid>
        <div className="flex flex-col md:flex-row justify-between items-center p-4 mx-4 my-2">
            <Link href="/" className="flex items-center mb-4 md:mb-0">
                <img src={Logo} alt="Logo" className="max-w-full h-20" />
            </Link>

            <div className="flex-grow flex justify-center space-x-6 md:space-x-12 mx-4">
                <Link href="/" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className='text-lg no-underline'>
                        HOME
                    </h5>
                </Link>
                <Link href="http://localhost:5173/" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className='text-lg no-underline	'>
                        DASHBOARD
                    </h5>
                </Link>
                <Link href="#" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className='text-lg no-underline	'>
                        CONTATO
                    </h5>
                </Link>
            </div>

            <div className="flex items-center space-x-4">
                <Link href="#" className="flex items-center">
                    <Avatar className="bg-deepPurple-500">C</Avatar>
                </Link>

                <Link href="/carrinho" className="flex items-center">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={qntProd} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
