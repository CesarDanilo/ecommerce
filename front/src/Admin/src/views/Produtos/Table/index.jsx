import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import axios from 'axios';

const Tabela = () => {
    const [data, setData] = useState([]);
    const urlBased = "http://localhost:3001/produto";

    const handleClickEditar = async () => {

    }

    const handleClickExcluir = async () => {

    }

    const buscarDados = async () => {
        try {
            const res = await axios.get(urlBased);
            const { data: produto } = res.data
            setData(produto); // `res.data` deve ser o array que você espera
            console.log("Dados retornados do banco: ", data);
        } catch (error) {
            console.error("Não foi possível consultar os dados, erro: ", error);
        }
    };

    useEffect(() => {
        buscarDados();
    }, []);

    return (
        <div style={{ margin: 15, position: 'relative' }}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">NOME</TableCell>
                            <TableCell align="left">DESCRIÇÃO</TableCell>
                            <TableCell align="right">PREÇO</TableCell>
                            <TableCell align="right">ESTOQUE</TableCell>
                            <TableCell align="right">AÇÕES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow
                                key={item.id} // Certifique-se de que `id` é único
                            >
                                <TableCell><img src={`http://localhost:3001/uploads/${item.imagem}`} alt={item.name} width={50} /></TableCell>
                                <TableCell align="left">{item.nome}</TableCell>
                                <TableCell align="left">{item.descricao}</TableCell>
                                <TableCell align="right">{item.preco}</TableCell>
                                <TableCell align="right">{item.estoque}</TableCell>
                                <TableCell align="right">
                                    <>
                                        <IconButton variant="contained" size="small" onClick={() => {
                                            handleClickEditar(item.id);
                                        }}>
                                            <EditIcon color="success" />
                                        </IconButton>
                                        <IconButton variant="contained" onClick={() => {
                                            handleClickExcluir(item.id);
                                        }}>
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                    </>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Tabela;
