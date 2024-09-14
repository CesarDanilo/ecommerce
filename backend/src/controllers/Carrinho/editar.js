const { Carrinho } = require('../../database/models/');

const editarCarrinho = async (req, resp, next) => {

    const { id } = req.params;
    try {

        const dados = req.body;
        let result = await Carrinho.findByPk(id);

        if (!result)
            return resp.status(404).json({ msg: `Carrinho ID ${id} não encontrado` });

        try {
            await Carrinho.update(dados, { where: { id } });
        }
        catch (error) {
            const msg = 'Erro ao tentar Gravar!';
            const erro = error?.message;
            return resp.status(400).json({ msg, erro });
        }

        result = await Carrinho.findByPk(id);

        return resp.status(200).json({ msg: 'Gravado com Sucesso', data: result.dataValues });
    }
    catch (error) {
        const msg = 'Carrinho. Erro ao tentar Editar (generic).';
        const erro = error?.message;
        return resp.status(400).json({ msg, erro });
    }
}

module.exports = editarCarrinho;