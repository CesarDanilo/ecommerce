const { Pedido } = require('../../database/models/');

const editarPedido = async (req, resp, next) => {

    const { id } = req.params;
    try {

        const dados = req.body;
        let result = await Pedido.findByPk(id);

        if (!result)
            return resp.status(404).json({ msg: `Pedido ID ${id} não encontrado` });

        try {
            await Pedido.update(dados, { where: { id } });
        }
        catch (error) {
            const msg = 'Erro ao tentar Gravar!';
            const erro = error?.message;
            return resp.status(400).json({ msg, erro });
        }

        result = await Pedido.findByPk(id);

        return resp.status(200).json({ msg: 'Gravado com Sucesso', data: result.dataValues });
    }
    catch (error) {
        const msg = 'Pedido. Erro ao tentar Editar (generic).';
        const erro = error?.message;
        return resp.status(400).json({ msg, erro });
    }
}

module.exports = editarPedido;