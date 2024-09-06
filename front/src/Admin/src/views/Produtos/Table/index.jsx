import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Tabela = () => {
    return (
        <div style={{ margin: 15, position: 'fixed' }}>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 1600 }} aria-label="simple table">
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
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={""}
                            >
                                <TableCell component="th" scope="row"> IMG </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Tabela