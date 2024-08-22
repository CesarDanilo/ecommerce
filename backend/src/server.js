const express = require('express');
const app = express();
const port = 3001;
const rotas = require('./routes');
const cors = require('cors');

// Middleware para parsear JSON
app.use(express.json());

// Definindo a rota raiz
app.get('/', (req, res) => {
    res.send('Hello!');
});

app.use(cors({
    origin: 'http://localhost:3000' // Permite apenas a origem específica
}));

// Usando as rotas importadas
app.use('/', rotas);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});
