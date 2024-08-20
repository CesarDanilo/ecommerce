const { Pedido } = require('../../database/models/');

const excluirPedido = async (req, resp, next) => {

    const { id } = req.params;
    try {

        let result = await Pedido.findByPk(id);

        if (!result)
            return resp.status(404).json({ msg: `Pedido ID ${id} não encontrado` });

        try {
            result = await Pedido.destroy({ where: { id } });
        }
        catch (error) {
            const msg = 'Erro ao tentar Excluir!';
            const erro = error?.message;
            return resp.status(400).json({ msg, erro });
        }

        return resp.status(200).json({ msg: 'Excluído com Sucesso' });
    }
    catch (error) {

        const msg = 'Pedido. Erro ao tentar Excluir (generic).';
        const erro = error?.message;
        return resp.status(400).json({ msg, erro });
    }
}


module.exports = excluirPedido;