import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Cadastro = () => {
    const [ativo, setAtivo] = useState(false); // Estado para controlar o alerta
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        // Aqui você pode processar o arquivo selecionado
        console.log(event.target.files[0]);
    };

    const handleSave = () => {
        setAtivo(true); // Ativa o alerta
        setTimeout(() => {
            setAtivo(false); // Desativa o alerta após 3 segundos
        }, 3000); // Tempo de 3 segundos
    };

    return (
        <>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {ativo && (
                    <Alert severity="success">Dados gravados com sucesso!</Alert>
                )}
            </Stack>
            <h1>Cadastro</h1>
            <Box component="section" sx={{ p: 2 }}>
                <div style={{ display: "flex", gap: "12px" }}>
                    <TextField
                        required
                        id="produto"
                        label="Produto"
                        size="small"
                        style={{ width: "350px" }}
                    />
                    <TextField
                        required
                        id="preco"
                        label="Preço"
                        size="small"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: "150px" }}
                    />
                    <TextField
                        required
                        id="estoque"
                        label="Estoque"
                        size="small"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ width: "76px" }}
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
                        defaultValue=""
                        style={{ width: "600px" }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleSave} // Adicione o manipulador de clique aqui
                        style={{ height: "40px", width: "200px", marginLeft: "30px", backgroundColor: "black" }}
                    >
                        Gravar
                    </Button>
                </div>
            </Box>
        </>
    );
}

export default Cadastro;
