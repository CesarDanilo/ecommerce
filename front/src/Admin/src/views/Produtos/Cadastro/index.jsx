import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const Cadastro = ({ id, editarDados, setEditarDados }) => {
    const [ativo, setAtivo] = useState(false);
    const [data, setData] = useState([]);
    const fileInputRef = useRef(null);

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState('');
    const [imagem, setImagem] = useState(null);

    const url_Based = "http://localhost:3001/produto/";

    const buscarDados = async () => {
        try {
            const res = await axios.get(`${url_Based}?id=${id}`);
            const { data } = res.data;
            setData(data[0]);

            setNome(data[0].nome);
            setDescricao(data[0].descricao);
            setPreco(data[0].preco);
            setEstoque(data[0].estoque);
            setImagem(data[0].imagem);
        } catch (error) {
            console.error("Não foi possível consultar os dados, erro: ", error);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        setImagem(event.target.files[0]);
    };

    const handleSave = async () => {
        try {
            await enviarDados();
            setAtivo(true);
            setTimeout(() => {
                setAtivo(false);
            }, 3000);
        } catch (error) {
            console.error("Erro ao salvar dados:", error);
        }
    };

    const enviarDados = async () => {
        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("descricao", descricao);
        formData.append("preco", preco);
        formData.append("estoque", estoque);
        formData.append("imagem", imagem);

        try {
            if (id) {
                const url = `${url_Based}?id=${id}`;
                await axios.put(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } else {
                const url = `${url_Based}`;
                await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
        } catch (error) {
            console.log("Erro ao enviar dados: ", error);
        }
    };

    useEffect(() => {
        if (id) {
            buscarDados();
        }
    }, [id]);

    return (
        <>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {ativo && (
                    <div style={{
                        position: 'fixed',
                        bottom: '16px',
                        right: '16px',
                        zIndex: 1300,
                    }}>
                        <Alert severity="success">Dados gravados com sucesso!</Alert>
                    </div>
                )}
            </Stack>
            <h1>Cadastro</h1>
            <Box component="section" sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: "flex", gap: "12px" }}>
                    <TextField
                        required
                        id="produto"
                        label="Produto"
                        size="small"
                        style={{ width: "350px" }}
                        InputLabelProps={{ shrink: true }}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <TextField
                        required
                        id="preco"
                        label="Preço"
                        size="small"
                        type="number"
                        InputLabelProps={{ shrink: true }}
                        style={{ width: "150px" }}
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    <TextField
                        required
                        id="estoque"
                        label="Estoque"
                        size="small"
                        type="number"
                        InputLabelProps={{ shrink: true }}
                        style={{ width: "76px" }}
                        value={estoque}
                        onChange={(e) => setEstoque(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        style={{ width: "200px", marginLeft: "30px", backgroundColor: "black" }}
                    >
                        Selecionar Arquivo
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>
                <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
                    <TextField
                        required
                        multiline
                        id="Descricao"
                        label="Descrição"
                        size="small"
                        rows={4}
                        style={{ width: "600px" }}
                        InputLabelProps={{ shrink: true }}
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSave}
                        style={{ height: "40px", width: "200px", marginLeft: "30px", backgroundColor: "black" }}
                    >
                        Gravar
                    </Button>
                </div>
            </Box>
        </>
    );
};

export default Cadastro;
