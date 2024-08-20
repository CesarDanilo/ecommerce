const { PedidoProduto } = require('../../database/models/');

const editarPedidoProduto = async (req, resp, next) => {

    const { id } = req.params;
    try {

        const dados = req.body;
        let result = await PedidoProduto.findByPk(id);

        if (!result)
            return resp.status(404).json({ msg: `PedidoProduto ID ${id} não encontrado` });

        try {
            await PedidoProduto.update(dados, { where: { id } });
        }
        catch (error) {
            const msg = 'Erro ao tentar Gravar!';
            const erro = error?.message;
            return resp.status(400).json({ msg, erro });
        }

        result = await PedidoProduto.findByPk(id);

        return resp.status(200).json({ msg: 'Gravado com Sucesso', data: result.dataValues });
    }
    catch (error) {
        const msg = 'PedidoProduto. Erro ao tentar Editar (generic).';
        const erro = error?.message;
        return resp.status(400).json({ msg, erro });
    }
}

module.exports = editarPedidoProduto;