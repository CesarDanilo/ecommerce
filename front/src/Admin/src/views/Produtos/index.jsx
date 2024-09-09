import { Button, Row, Col, NavItem, Nav, TabContent, TabPane } from "reactstrap";
import { NavLink } from "react-router-dom";


import Cadastro from "./Cadastro";
import Tabela from "./Table";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Produto = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [dados, setDados] = useState(null);
    const [open, setOpen] = React.useState({ visible: false, id: '' });
    const [id, setId] = useState();

    const [atualizaPagina, setAtualizaPagina] = useState(false);
    const [editarDados, setEditarDados] = useState(false);

    const [evento, setEvento] = useState(false);

    const handleClickExcluir = async (id) => {
        setOpen({ ...open, visible: true, id: id });
        console.log(id)
    }

    const excluirRegitro = async (id) => {
        try {
            setOpen({ ...open, visible: false, id: '' });
            const url = "";
            const res = await axios.delete(url + id);
            console.log(url + id)
            setAtualizaPagina(true);
        } catch (error) {
            window.alert("Item já excluido!")
        }
    }

    const handleClose = () => {
        setOpen({ ...open, visible: false, id: '' });
    };

    const handleClickEditar = async (id) => {
        setActiveTab('2');
        setId(id);
        setEditarDados(true)
    };

    // CASO EU TROQUE O VALOR DO ACTIVETAB EU MUDO O VALOR DO EVENTO E ENVIO COMO PROPS PARA O CADASTRO 
    // QUANDO O VALOR CHEGA LA E ESTA TROCADO ELE LIMPA A TELA
    useEffect(() => {
        setEvento(!evento);
    }, [activeTab]);

    return (
        <>
            <Dialog
                open={open.visible}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirma Exclusão"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Certeza que deseja excluir?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={() => { { excluirRegitro(open.id) } }} autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>

            <div className="content" style={{ marginTop: 60 }} >
                <div>
                    <Nav tabs justified='fill'>
                        <NavItem className="NavItem"
                            style={{
                                margin: "0px 0px 20px 0px"
                            }}>
                            <NavLink
                                className={activeTab}
                                onClick={() => setActiveTab('1')}
                                style={{ color: "black" }}
                            >
                                LISTAGEM
                            </NavLink>
                        </NavItem>
                        <NavItem className="NavItem"
                            style={{
                                margin: "0px 0px 20px 0px"
                            }}>
                            <NavLink
                                className={activeTab}
                                onClick={() => setActiveTab('2')}
                                style={{ color: "black" }}
                            >
                                CADASTRO
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Tabela
                                        handleClickExcluir={handleClickExcluir}
                                        handleClickEditar={handleClickEditar}
                                        atualizaPagina={atualizaPagina}
                                        setAtualizaPagina={setAtualizaPagina}
                                        activeTab={activeTab}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Cadastro
                                        id={id}
                                        editarDados={editarDados}
                                        setEditarDados={setEditarDados}
                                        evento={evento}
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </>
    );
}

export default Produto;