import React, { useEffect, useState } from "react"; // Adicionei o useState
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import axios from "axios";
import Produto from "../Produto/MainProduto";

const Cards = ({ titulo }) => {
    const [data, setData] = useState([]);

    const baseURL = "http://localhost:3001/produto";

    const BuscarDados = async () => {
        try {
            const res = await axios.get(baseURL); // Corrigido para usar baseURL
            const { data: produtos } = res.data; // Renomeado para evitar conflito
            setData(produtos);
            console.log(produtos);
        } catch (error) {
            console.log("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        BuscarDados();
    }, []);

    return (
        <Box
            sx={{
                maxWidth: 1000,
                margin: '0 auto',
                padding: '0 16px',
                width: '100%',
            }}
        >
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                    fontWeight: "bold",
                    marginTop: 5,
                    marginBottom: 3,
                    textAlign: 'center',
                }}
            >
                {titulo}
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {data.map((i, index) => (
                    <div key={index} className="w-full rounded-lg">
                        <Link to={`/produto/${i.id}`} className="block text-black no-underline">
                            <div className="bg-slate-50 shadow-lg shadow-cyan-950/25 rounded-lg max-w-full mx-auto transition-transform duration-200 transform hover:scale-105">
                                <div className="relative">
                                    <img
                                        className="w-full h-48 object-cover rounded-t-lg"
                                        src={`http://localhost:3001/uploads/${i.imagem}`}
                                        alt="mouse pad"
                                    />
                                </div>
                                <div className="p-4 text-left flex flex-col space-y-1">
                                    <h3 className="font-semibold text-base text-gray-900">{i.nome}</h3>
                                    <p className="text-gray-600 text-sm">{i.descricao}</p>
                                    <p className="text-black font-bold text-lg">{`R$ ${i.preco}`}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>


        </Box>
    );
}

export default Cards;
