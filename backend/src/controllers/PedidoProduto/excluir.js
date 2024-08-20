const { PedidoProduto } = require('../../database/models');

const excluirPedidoProduto = async (req, resp, next) => {

    const { id } = req.params;
    try {

        let result = await PedidoProduto.findByPk(id);

        if (!result)
            return resp.status(404).json({ msg: `PedidoProduto ID ${id} não encontrado` });

        try {
            result = await PedidoProduto.destroy({ where: { id } });
        }
        catch (error) {
            const msg = 'Erro ao tentar Excluir!';
            const erro = error?.message;
            return resp.status(400).json({ msg, erro });
        }

        return resp.status(200).json({ msg: 'Excluído com Sucesso' });
    }
    catch (error) {

        const msg = 'PedidoProduto. Erro ao tentar Excluir (generic).';
        const erro = error?.message;
        return resp.status(400).json({ msg, erro });
    }
}


module.exports = excluirPedidoProduto;