const { Carrinho, Produto } = require('../../database/models');
const { Op } = require('sequelize');

const listarCarrinho = async (req, resp) => {
    const { offset, order, direction, usuario_id } = req.query;
    let { limit } = req.query;
    limit = limit ? parseInt(limit) : 15;

    try {
        // Controle de Paginação com LIMIT e OFFSET
        let options = {};
        if (offset) {
            options.offset = parseInt(offset);
        }

        if (limit > 0) {
            options.limit = limit;
        }

        let orderOptions = [];
        if (order) {
            orderOptions.push([order, direction ? direction.toUpperCase() : 'ASC']);
        }

        // Preparando o Objeto Where para filtrar pelo usuario_id do usuário
        let where = {};
        if (usuario_id) {
            where.usuario_id = parseInt(usuario_id); // Assumindo que a coluna para usuário é 'usuario_id'
        }

        // Contando sem o limit e offset para paginação
        const countAll = await Carrinho.count({ where });

        // Chamada find com where, join com Produto e parâmetros de offset, limit e order
        const result = await Carrinho.findAll({
            ...options,
            order: orderOptions,
            where,
            include: [
                {
                    model: Produto,
                    attributes: ['id', 'nome', 'descricao', 'preco', 'estoque', 'imagem'], // Atributos da tabela Produto que deseja trazer
                }
            ],
            attributes: ['id', 'quantidade'] // Incluindo apenas os atributos necessários do Carrinho
        });

        return resp.status(200).json({
            countAll,
            count: result?.length || 0,
            data: result
        });
    } catch (error) {
        const msg = 'Erro ao tentar listar Carrinho';
        console.error(error);
        return resp.status(400).json({ msg, erro: error.message });
    }
};

module.exports = listarCarrinho;
