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


    // const verificarSessao = () => {
    //     if (localStorage.getItem) {
    //         return true;
    //     }
    //     return false;
    // }


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
        <div className="flex flex-col md:flex-row justify-between items-center p-4 mx-4 my-2">
            <Link href="/" className="flex items-center mb-4 md:mb-0">
                <img src={Logo} alt="Logo" className="max-w-full h-20" />
            </Link>

            <div className="flex-grow flex justify-center space-x-6 md:space-x-12 mx-4">
                <a href="/" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className="text-lg text-slate-950 font-semibold no-underline">
                        HOME
                    </h5>
                </a>
                <a href="http://localhost:5173/" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className="text-lg text-slate-950 font-semibold">
                        DASHBOARD
                    </h5>
                </a>
                <a href="#" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className="text-lg text-slate-950 font-semibold">
                        CONTATO
                    </h5>
                </a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="/carrinho" className="flex items-center">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={qntProd} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </a>
                <a href="#" className="flex items-center">
                    {
                        localStorage.getItem("") ?
                            <Avatar className="bg-deepPurple-500">C</Avatar> :
                            <a href="/login" className="flex items-center">
                                <h5 className="text-lg text-slate-950 font-semibold">LOGIN</h5>
                            </a>
                    }
                </a>
            </div>
        </div>
    );
}

export default NavBar;
