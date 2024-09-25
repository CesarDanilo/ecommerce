import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios";

const ProdutosRelacionados = () => {
    const [data, setData] = useState([]); // Inicializa como array vazio
    const baseURL = "http://localhost:3001/produto/";
    const maxProducts = 3;

    const BuscarDadosProduto = async () => {
        try {
            const res = await axios.get(baseURL);
            const { data } = res.data; // Verifique a estrutura da resposta
            setData(data);
            console.log(data);
        } catch (erro) {
            console.log("não foi possível buscar os dados: ", erro);
        }
    }

    useEffect(() => {
        BuscarDadosProduto();
    }, [])

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
                    marginTop: 10,
                    marginBottom: 3,
                    textAlign: 'start',
                }}
            >
                Produtos Relacionados
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
    )
}

export default ProdutosRelacionados;
