import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Grid, Badge, IconButton, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';

import Logo from '../../img/Logo/padpalace.png';

const NavBar = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userAdmin, setUserAdmin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState(null);

    const apiBaseURL = "http://localhost:3001";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const checkUserSession = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setUserName(parsedUser?.nome || '');
            checkUserAdmin(parsedUser.id);
            return true;
        }
        return false;
    };

    const checkUserAdmin = async (userId) => {
        try {
            const response = await axios.get(`${apiBaseURL}/users/?id=${userId}`);
            const userData = response.data?.data?.[0];
            setUserAdmin(userData?.admin || false);
        } catch (error) {
            console.error("Erro ao verificar se o usuário é admin:", error);
            setUserAdmin(false);
        }
    };

    const clearLocalStorageUser = () => {
        try {
            localStorage.clear();
            setUser(null);
            setCartItemCount(0);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao sair da conta:", error);
        }
    };

    const fetchCartItemCount = async () => {
        if (user) {
            try {
                const response = await axios.get(`${apiBaseURL}/carrinho`);
                setCartItemCount(response.data?.count || 0);
            } catch (error) {
                console.error("Erro ao buscar quantidade de produtos no carrinho:", error);
            }
        }
    };

    useEffect(() => {
        const loggedIn = checkUserSession();
        setIsUserLoggedIn(loggedIn);
        if (loggedIn) {
            fetchCartItemCount();
        }
    }, []);

    useEffect(() => {
        if (user) fetchCartItemCount();
    }, [user]);

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
                    <h5 className="text-sm text-slate-950 font-semibold">HOME</h5>
                </a>
                {userAdmin && (
                    <a href="/dashboard" className="text-black font-bold hover:text-gray-700 no-underline">
                        <h5 className="text-sm text-slate-950 font-semibold">DASHBOARD</h5>
                    </a>
                )}
                <a href="#contact" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className="text-sm text-slate-950 font-semibold">CONTATO</h5>
                </a>
            </div>

            <div className="flex items-center space-x-4">
                <a href="/carrinho" className="flex items-center">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={cartItemCount} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </a>
                <div className="relative">
                    {isUserLoggedIn ? (
                        <div className="relative">
                            <Avatar
                                className="bg-deepPurple-500 cursor-pointer"
                                onClick={toggleMenu}
                            >
                                {userName.charAt(0).toUpperCase()}
                            </Avatar>
                            {isMenuOpen && (
                                <div className="absolute bg-white shadow-md right-0 mt-2 py-2 w-32 rounded-md">
                                    <div className="px-4 py-2 text-sm text-gray-700">
                                        Olá, {userName}
                                    </div>
                                    <a
                                        href="#"
                                        onClick={clearLocalStorageUser}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        SAIR
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex space-x-4">
                            <a href="/login" className="text-sm text-slate-950 font-semibold hover:underline">
                                LOGIN
                            </a>
                            <a href="/register" className="text-sm text-slate-950 font-semibold hover:underline">
                                REGISTER
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
