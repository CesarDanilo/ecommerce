import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { SettingsSuggestRounded } from '@mui/icons-material';

const Cadastro = () => {
    const [ativo, setAtivo] = useState(false); // Estado para controlar o alerta
    const fileInputRef = useRef(null);

    // INPUTS
    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState();
    const [estoque, setEstoque] = useState();
    const [imagem, setImagem] = useState();

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        // Aqui você pode processar o arquivo selecionado
        setImagem(event.target.files[0]);
    };

    const handleSave = () => {
        enviarDados()
        setAtivo(true); // Ativa o alerta
        setTimeout(() => {
            setAtivo(false); // Desativa o alerta após 3 segundos
        }, 3000); // Tempo de 3 segundos
    };

    const enviarDados = () => {
        console.log(nome)
        console.log(preco)
        console.log(descricao)
        console.log(estoque)
        console.log(imagem)
    }

    return (
        <>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {ativo && (
                    <div style={{
                        position: 'fixed',
                        bottom: '16px',
                        right: '16px',
                        zIndex: 1300, // Garante que o alerta esteja acima dos outros componentes
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
                        onChange={(e) => { setNome(e.target.value) }}
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
                        onChange={(e) => { setPreco(e.target.value) }}
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
                        onChange={(e) => { setEstoque(e.target.value) }}
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
