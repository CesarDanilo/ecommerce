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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ConstructionOutlined } from '@mui/icons-material';

const NavBar = ({ qntProd }) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userAdmin, setUserAdmin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [quantidadeProdutocarrinho, setQuantidadeProdutocarrinho] = useState(0);
    const [nameForIcon, setNameForIcon] = useState();

    const url = "http://localhost:3001/users/?id=";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const checkUserSession = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.id) {
            checkUserAdmin(user.id);
            setNameForIcon(user.nome)
            return true;
        }
        return false
    };

    const checkUserAdmin = async (id) => {
        try {
            const response = await axios.get(url + id);
            const { data } = response.data;

            // Atualiza o estado de userAdmin
            setUserAdmin(data[0]?.admin); // Usando optional chaining para evitar erro se data[0] for undefined

            return data[0]?.admin || false; // Retorna o valor de admin ou false se não houver dados
        } catch (error) {
            console.error("Erro ao verificar admin:", error);
            setUserAdmin(false); // Define como false em caso de erro
        }
    };

    const clearLocalStorageUser = () => {
        try {
            localStorage.clear();
            window.location.reload(true);
        } catch (error) {
            console.log("não foi possivel sair da conta!");
        }
    }

    const buscarQuantidadeDeProdutos = async () => {
        try {
            const response = await axios.get("http://localhost:3001/carrinho/");
            const { count } = response.data;
            setQuantidadeProdutocarrinho(count);
            console.log("devolvendo carrinho", count);
        } catch (error) {
            console.log("Não foi possivel trazer a quantidade de produtos do carrinho: ", error)
        }
    }

    // const adicionarIconeUsuarioNome = async() => {
    //     try {


    //     } catch (error) {
    //         console.log("Erro Ao buscar nome!!!")
    //     }
    // }

    useEffect(() => {
        const loggedIn = checkUserSession();
        setIsUserLoggedIn(loggedIn);
        buscarQuantidadeDeProdutos();
    }, []);

    useEffect(() => {
        buscarQuantidadeDeProdutos();
    }, [quantidadeProdutocarrinho])

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
                    <h5 className="text-sm text-slate-950 font-semibold no-underline">
                        HOME
                    </h5>
                </a>

                {userAdmin && (
                    <a href="http://localhost:5173/" className="text-black font-bold hover:text-gray-700 no-underline">
                        <h5 className="text-sm text-slate-950 font-semibold">
                            DASHBOARD
                        </h5>
                    </a>
                )}

                <a href="#" className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className="text-sm text-slate-950 font-semibold">
                        CONTATO
                    </h5>
                </a>
            </div>
            <div className="flex items-center space-x-4">
                <a href="/carrinho" className="flex items-center">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={quantidadeProdutocarrinho} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </a>
                {/* <a href="#" className="flex items-center">
                    {
                        isUserLoggedIn ? (
                            <Avatar className="bg-deepPurple-500">C</Avatar>
                        ) : (
                            <a href="/login" className="flex items-center">
                                <h3 className="text-sm text-slate-950 font-semibold">LOGIN</h3>
                            </a>
                        )
                    }
                </a>
                <a href="/register" className="flex items-center">
                    <h3 className="text-sm text-slate-950 font-semibold">REGISTER</h3>
                </a>
                <a href="#" onClick={clearLocalStorageUser} className="text-black font-bold hover:text-gray-700 no-underline">
                    <h5 className="text-sm text-slate-950 font-semibold">
                        SAIR
                    </h5>
                </a> */}
                <div className="relative">
                    <div className="relative">
                        <a href="#" className="flex items-center space-x-2">
                            {
                                isUserLoggedIn ? (
                                    <div className="relative">
                                        <Avatar
                                            className="bg-deepPurple-500 cursor-pointer"
                                            onClick={toggleMenu} // Ação para abrir/fechar o menu ao clicar
                                        >

                                        </Avatar>
                                        {/* Menu dropdown ao clicar no Avatar */}
                                        {isMenuOpen && (
                                            <div className="absolute bg-white shadow-md right-0 mt-2 py-2 w-32 rounded-md">
                                                <a>{nameForIcon}</a>
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
                                )
                            }
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NavBar;
