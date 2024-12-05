import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios";

const Cards = ({ titulo }) => {
    const [data, setData] = useState([]);

    const baseURL = "http://localhost:3001/produto";

    const BuscarDados = async () => {
        try {
            const res = await axios.get(baseURL);
            const { data: produtos } = res.data;
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
                padding: '20 16px',
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {data.map((i, index) => (
                    <div
                        key={index}
                        className="w-full rounded-lg"
                        style={{
                            height: '420px', // Altura fixa do card
                            display: 'flex', // Usando flexbox para garantir que o conteúdo se ajuste
                            flexDirection: 'column', // Garantir que os itens dentro do card se alinhem verticalmente
                            overflow: 'hidden', // Garante que o conteúdo não ultrapasse o card
                        }}
                    >
                        <Link to={`/produto/${i.id}`} className="block text-black no-underline">
                            <div className="bg-slate-50 rounded-lg max-w-full mx-auto transition-transform duration-200 transform hover:scale-105"
                                style={{ height: '100%' }}
                            >
                                <div
                                    className="relative"
                                    style={{
                                        height: '200px', // Define altura fixa para a imagem
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img
                                        className="w-full h-full object-cover rounded-t-lg"
                                        src={`http://localhost:3001/uploads/${i.imagem}`}
                                        alt="Produto"
                                    />
                                </div>
                                <div className="p-4 text-left flex flex-col justify-between flex-grow">
                                    <h3 className="font-semibold text-base text-gray-900">{i.nome}</h3>
                                    <p className="text-gray-600 text-sm">{i.descricao}</p>
                                    <div className="flex space-x-1 mt-1">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-5 w-5 ${starIndex < i.avaliacao ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 .587l3.668 7.431 8.197 1.188-5.916 5.788 1.396 8.173L12 18.896l-7.345 3.858 1.396-8.173-5.916-5.788 8.197-1.188z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-black font-bold text-lg">{`R$ ${i.preco}`}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Box>
    );
};

export default Cards;
