const { Carrinho } = require('../../database/models');
const { Op } = require('sequelize');

const listarCarrinho = async (req, resp) => {
    const { offset, order, direction, id } = req.query;
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

        // Preparando o Objeto Where de acordo com os parâmetros que vieram na requisição
        let where = {};

        if (id) {
            where.id = parseInt(id);
        }


        // Contando sem o limit e offset para poder criar a paginação
        const countAll = await Carrinho.count({ where });

        // Chamada find com where e os parâmetros de offset, limit, e order
        const result = await Carrinho.findAll({
            ...options,
            order: orderOptions,
            where,
            attributes: ['id'] // Incluindo apenas os atributos necessários
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
