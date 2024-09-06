import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Tabela = () => {
    const [data, setData] = useState([]);
    const urlBased = "http://localhost:3001/produto";

    const buscarDados = async () => {
        try {
            const res = await axios.get(urlBased);
            const { data } = res.data; // `res.data` já deve ser o array que você espera
            setData(data);
            console.log("Dados retornados do banco: ", data);
        } catch (error) {
            console.log("Não foi possível consultar os dados, erro: ", error);
        }
    };

    // Carregar dados quando o componente é montado
    useEffect(() => {
        buscarDados();
    }, []);

    return (
        <div style={{ margin: 15, position: 'relative' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>IMG</TableCell>
                            <TableCell align="left">NOME</TableCell>
                            <TableCell align="left">DESCRIÇÃO</TableCell>
                            <TableCell align="right">PREÇO</TableCell>
                            <TableCell align="right">ESTOQUE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(data) && data.map((i) => (
                            <TableRow
                                key={i.id} // Certifique-se de que `id` é único
                            >
                                <TableCell component="th" scope="row"> IMG </TableCell>
                                <TableCell align="left">{i.name}</TableCell>
                                <TableCell align="left">{i.description}</TableCell>
                                <TableCell align="right">{i.price}</TableCell>
                                <TableCell align="right">{i.stock}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={buscarDados}>Buscar</button>
        </div>
    );
}

export default Tabela;
