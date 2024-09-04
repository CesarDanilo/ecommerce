const express = require('express');
const app = express();
const port = 3001;
const rotas = require('./routes');
const cors = require('cors');
const session = require('express-session');

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração da sessão
app.use(session({
  secret: process.env.SECRET || 'your-secret-key', // Defina uma chave secreta
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Configure para true se estiver usando HTTPS
}));

// Habilitando o CORS para permitir requisições do frontend
app.use(cors({
  origin: 'http://localhost:3000', // Permite apenas a origem específica
  credentials: true // Permite o envio de cookies
}));

app.use('/uploads', express.static('uploads'));

// Rota para obter dados da sessão
app.get('/session', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user); // Retorna dados do usuário armazenados na sessão
  } else {
    res.status(401).send('Usuário não está logado');
  }
});

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
