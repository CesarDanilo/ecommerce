import { Badge, Card, CardHeader, CardFooter, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, Media, Pagination, PaginationItem, PaginationLink, Progress, Table, Container, Row, UncontrolledTooltip, } from "reactstrap";
import axios from "axios";
import Header from "../../../components/Headers/Header.js";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Await } from "react-router-dom";
import CadastroMaterial from "../Cadastro/index.jsx";
import { EditAttributes } from "@mui/icons-material";

const Produtos = () => {
    const [atualizarPagina, setAtualizarPagina] = useState(false);
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [editar, setEditar] = useState(false);

    const url = "http://localhost:3001/produto/";

    const BuscarDados = async () => {
        try {
            const res = await axios.get(url); // Aguarda a resposta da requisição
            const { data: produtos, countAll } = res.data; // Renomeia a variável para evitar conflito
            setData(produtos);
            console.log(produtos);

        } catch (error) {
            console.log("Erro ao buscar dados:", error); // Exibe o erro no console
        }
    };

    const handleClickExcluir = async (id) => {
        try {
            const res = await axios.delete(url + id);
            console.log(`codigo ${id} apagado`);
            setAtualizarPagina(true)

        } catch (error) {
            console.log("Erro ao buscar dados:", error); // Exibe o erro no console
        }
    }

    const handleClickEditar = async (id) => {
        setId(id);
        setEditar(true)
    }

    useEffect(() => {
        BuscarDados();
        if (atualizarPagina) {
            setAtualizarPagina(false);
            BuscarDados()
        }

        if (editar) {
            setEditar(false);
            BuscarDados();
        }
    }, [atualizarPagina, id, editar]);

    return (
        <>
            <Container className="mt--7" fluid
                style={{
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
                }}>
                <CadastroMaterial
                    id={id}
                    editar={editar}
                    setEditar={setEditar}
                    atualizarPagina={atualizarPagina}
                    setAtualizarPagina={setAtualizarPagina} />

                <Row>
                    <div className="col" style={{ marginTop: 20 }}>
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">TABELA DE PRODUTOS</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Imagem</th>
                                        <th scope="col">Produto</th>
                                        <th scope="col">Descrição</th>
                                        <th scope="col">Preço</th>
                                        <th scope="col">Estoque</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {data.map((item) => (
                                        <tr key={item.id}>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <img
                                                            alt={item.nome}
                                                            src={`http://localhost:3001/uploads/${item.imagem}`}
                                                            className="rounded-circle"
                                                            style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                                        />
                                                    </a>
                                                </Media>
                                            </th>
                                            <td>{item.nome}</td>
                                            <td>
                                                <span className="text-truncate" style={{ maxWidth: "150px" }}>
                                                    {item.descricao}
                                                </span>
                                            </td>
                                            <td>{item.preco}</td>
                                            <td>{item.estoque}</td>

                                            <td>
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
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination
                                        className="pagination justify-content-end mb-0"
                                        listClassName="justify-content-end mb-0"
                                    >
                                        <PaginationItem className="disabled">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                                tabIndex="-1"
                                            >
                                                <i className="fas fa-angle-left" />
                                                <span className="sr-only">Previous</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="active">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                2 <span className="sr-only">(current)</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="fas fa-angle-right" />
                                                <span className="sr-only">Next</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>

        </>
    );
}

export default Produtos;
