const { Produto } = require('../../database/models/');

const inserirProduto = async (req, resp, next) => {
    try {
        const dados = req.body;

        // Validações básicas (exemplo)
        if (!dados.nome || !dados.preco || !dados.estoque) {
            return resp.status(400).json({ msg: 'Dados incompletos! Verifique os campos obrigatórios.' });
        }

        // Inserir produto
        const result = await Produto.create(dados);

        // Retorna sucesso
        return resp.status(201).json({ msg: 'Gravado com Sucesso', data: result.dataValues });
    } catch (error) {
        // Captura erros e responde com status 500 (erro no servidor)
        const msg = 'Erro ao tentar gravar o produto.';
        const erro = error?.message;
        return resp.status(500).json({ msg, erro });
    }
}

module.exports = inserirProduto;
