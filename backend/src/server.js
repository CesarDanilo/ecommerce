const express = require('express');
const axios = require('axios'); // Certifique-se de importar axios
const app = express();
const port = 3001;
const rotas = require('./routes');
const cors = require('cors');
const session = require('express-session');

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de CORS
app.use(cors({
  origin: '*', // Altere para a URL do seu frontend em produção
}));

// Serve os arquivos de upload
app.use('/uploads', express.static('uploads'));

// Configuração da sessão
app.use(session({
  secret: process.env.SECRET || 'your-secret-key', // Defina uma chave secreta
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Configure para true se estiver usando HTTPS
}));

// Rota para obter dados da sessão
app.get('/session', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user); // Retorna dados do usuário armazenados na sessão
  } else {
    res.status(401).send('Usuário não está logado');
  }
});

// Rota para calcular o frete
app.post('/calculate-shipment', async (req, res) => {
  console.log('Dados recebidos para calcular frete:', req.body); // Log dos dados recebidos

  // Validação dos dados
  const { from, to, products } = req.body;
  if (!from || !to || !products || !Array.isArray(products)) {
    return res.status(400).json({ error: 'Dados inválidos. Verifique os campos "from", "to" e "products".' });
  }

  try {
    const options = {
      method: 'POST',
      url: 'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWQ1N2U0MjkyZDU4ZDVhODJhM2ExMTZiNTU1YzkxNWM5NWUyZDNkZDM4ZDVlZjZmMjc2ZGFlZjk2YjA0Nzg0NGU0OWQzYzUxZTE3ZGUzNmMiLCJpYXQiOjE3MzMzNTkwMjQuNjEzMTg5LCJuYmYiOjE3MzMzNTkwMjQuNjEzMTksImV4cCI6MTc2NDg5NTAyNC42MDIxMSwic3ViIjoiOWRhNWU2NDItOTZjNy00N2IzLTg0YWUtOWNlMWQ0MzJjYTdjIiwic2NvcGVzIjpbInNoaXBwaW5nLWNhbGN1bGF0ZSJdfQ.jVkgSlggndNfFS7EmPQwuii3bp88avYisLX1_uuYCyrghVwJANB34mwG4VctRA_yjCM57GZDzmuOAuDxQIHwWx6VUtSjFy20pykQepw9n8g6Qeuqv5x5pNI08npLkXVEeVJpcLCoJhoFNlTGhgk6cD7tCZJzo9uiKhO7yJacrlG6Pl3T5G7uK7MREpaB3Z5tu9RNL1vOAmJQKaE9e9sVvUdhpikaSNLgX2LoDq_a0SoupPy7fFRRZFRB_6feB1gH625Rvcb-TPW3ReoCnDIDgQS6jz_6nHfbSvd6TWiikADHHhVXKWfQKWe0rgho0wPLsw9-FkcAUXdAcqbfDw9apbqbZrKlrLlCrBqTo7r2sUV6TT6LU-hAkknwEOOLo1fVrp7lonX34BDZpZ6g0f6fpXj8sReovxWc__SZnld9ky8NmXB3aS-1ub2Gdb0MfhE6BFp7K7UMEACBZTUKfH308MBNbyAyW1rlx9b2KE5iyAnvGbcq6aUMUz52cjO3wjL7FPZA4KYAtPUPglLHqY-YYgJ9gQ38P42my-BiZ7KSMUolPzKbZ97eSo0h1pXUpUazXTylUATYgR0ehd7qBU9FDKepUGfLakjZi911ig9PCYnK0-ClIbySA42VHkYzVimrwghOt8iPvCCHQFdowOvZLnziqUTFVCFTD44Hu4yFfVg`, // Certifique-se de que a variável de ambiente está correta
        'User-Agent': 'Aplicação cesardanilopalacios616@gmail.com',
      },
      data: { from, to, products },
    };

    const response = await axios.request(options);
    console.log('Resposta da API Melhor Envio:', response.data); // Log da resposta da API externa
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao calcular frete:', error.response ? error.response.data : error.message); // Log detalhado do erro
    res.status(500).json({ error: 'Erro ao calcular o frete. Tente novamente.' });
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
