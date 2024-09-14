const { Carrinho } = require('../../database/models/');

const excluirCarrinho = async (req, resp, next) => {

    const { id } = req.params;
    try {

        let result = await Carrinho.findByPk(id);

        if (!result)
            return resp.status(404).json({ msg: `Carrinho ID ${id} não encontrado` });

        try {
            result = await Carrinho.destroy({ where: { id } });
        }
        catch (error) {
            const msg = 'Erro ao tentar Excluir!';
            const erro = error?.message;
            return resp.status(400).json({ msg, erro });
        }

        return resp.status(200).json({ msg: 'Excluído com Sucesso' });
    }
    catch (error) {

        const msg = 'Carrinho. Erro ao tentar Excluir (generic).';
        const erro = error?.message;
        return resp.status(400).json({ msg, erro });
    }
}


module.exports = excluirCarrinho;