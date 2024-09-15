import axios from "axios"
import { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Usuarios = () => {
  const [data, setData] = useState([]);

  const baseUrl = "http://localhost:3001/users";
  const buscarUsuariosCadastrados = async () => {
    try {
      const response = await axios.get(baseUrl);
      const { data } = response.data
      setData(data)
      console.log("Dados retornardos: ", data)
    } catch (error) {
      console.log("não foi possivel buscar os usuarios: ", error)
    }
  }

  useEffect(() => {
    buscarUsuariosCadastrados();
  }, []);

  return (
    <div style={{ margin: 15, position: 'relative' }}>
      <h1 style={{ margin: 25, position: 'relative' }}>Usuarios</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">NOME</TableCell>
              <TableCell align="left">E-MAIL</TableCell>
              <TableCell align="center">ADMIN?</TableCell> {/* Ajustei o alinhamento para centralizado */}
              <TableCell align="left">DATE CREATE</TableCell> {/* Ajustei o alinhamento para o padrão */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell></TableCell> {/* Adiciona uma célula em branco, se necessário */}
                <TableCell align="left">{item.id}</TableCell>
                <TableCell align="left">{item.nome}</TableCell>
                <TableCell align="left">{item.email}</TableCell>
                <TableCell align="center">{item.admin ? 'Yes' : 'No'}</TableCell> {/* Exibe 'Yes' ou 'No' */}
                <TableCell align="left">
                  {item.createdAt ?
                    new Date(item.createdAt).toLocaleDateString() :
                    'Data não disponível'}
                </TableCell> {/* Formata a data */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Usuarios