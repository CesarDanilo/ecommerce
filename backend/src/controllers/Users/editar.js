const { Users } = require('../../database/models');

const editarUsers = async (req, resp, next) => {

    const { id } = req.params;
    try {

        const dados = req.body;
        let result = await Users.findByPk(id);

        if (!result)
            return resp.status(404).json({ msg: `Users ID ${id} não encontrado` });

        try {
            await Users.update(dados, { where: { id } });
        }
        catch (error) {
            const msg = 'Erro ao tentar Gravar!';
            const erro = error?.message;
            return resp.status(400).json({ msg, erro });
        }

        result = await Users.findByPk(id);

        return resp.status(200).json({ msg: 'Gravado com Sucesso', data: result.dataValues });
    }
    catch (error) {
        const msg = 'Users. Erro ao tentar Editar (generic).';
        const erro = error?.message;
        return resp.status(400).json({ msg, erro });
    }
}

module.exports = editarUsers;