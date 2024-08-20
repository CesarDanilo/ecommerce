const { Produto } = require('../../database/models');
const { Op } = require('sequelize');

const listarProduto = async (req, resp) => {
    const { offset, order, direction, nome, id } = req.query; // Adicionado 'id'
    let { limit } = req.query;
    limit = limit ? parseInt(limit) : 15; // Convertendo limit para inteiro

    try {
        //* Controle de Paginação com LIMIT e OFFSET */
        let options = {};
        if (offset) {
            options.offset = parseInt(offset); // Convertendo offset para inteiro
        }

        if (limit > 0) {
            options.limit = limit;
        }
        // **********************************************

        let orderOptions = [];

        if (order) {
            orderOptions.push([order, direction ? direction.toUpperCase() : 'ASC']);
        }

        //* Preparando o Objeto Where de acordo com os parâmetros que vieram na requisição */
        let where = {};

        if (id) {
            where.id = parseInt(id); // Adicionando filtro por id
        }


        if (nome) {
            where['$Produto.nome$'] = { // Usando a sintaxe correta para incluir a condição no modelo relacionado
                [Op.iLike]: `%${nome}%`
            };
        }

        // Contando sem o limit e offset para poder criar a paginação
        const countAll = await Produto.count({
            where,
            include: [
                {
                    model: Produto,
                    attributes: [] // Não incluir atributos, apenas contar
                }
            ]
        });

        // Chamada find com where e os parâmetros de offset e limit
        const result = await Produto.findAll({
            ...options,
            order: orderOptions,
            where,
            include: [
                {
                    model: Produto,
                    attributes: ['id', 'nome'] // Incluindo apenas os atributos necessários
                }
            ]
        });

        console.log('Estou dentro do try');
        return resp.status(200).json({
            countAll,
            count: result?.length || 0,
            data: result
        });
    }
    catch (error) {
        const msg = 'Produto. Erro ao tentar listar (Produto)';
        console.error(error); // Adicionando log detalhado do erro
        return resp.status(400).json({ msg, erro: error.message });
    }
}

module.exports = listarProduto;
