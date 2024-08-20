const { Favoritos } = require('../../database/models/');

const inserirFavoritos = async (req, res, next) => {
    try {
        const dados = req.body;

        // Tenta inserir os dados no banco de dados
        const result = await Favoritos.create(dados);

        // Retorna sucesso se a criação for bem-sucedida
        return res.status(200).json({ msg: 'Gravado com Sucesso', data: result.dataValues });
    } catch (error) {
        // Captura qualquer erro e retorna uma resposta adequada
        const msg = 'Erro ao tentar gravar!';
        const erro = error?.message;
        return res.status(400).json({ msg, erro });
    }
}

module.exports = inserirFavoritos;
