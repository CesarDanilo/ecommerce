const express = require('express');
const app = express();
const port = 3001;
const rotas = require('./routes');
const cors = require('cors');

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitando o CORS para permitir requisições do frontend
app.use(cors({
    origin: 'http://localhost:3000' // Permite apenas a origem específica
}));

// Servir arquivos estáticos da pasta 'static/uploads'

// Definindo a rota raiz
app.get('/', (req, res) => {
    res.send('Hello!');
});

// Usando as rotas importadas
app.use('/', rotas);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});
