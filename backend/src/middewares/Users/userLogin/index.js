const { Users } = require("../../../database/models/");


const userLogin = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await Users.findByPk(id, { attributes: { exclude: ['senha'] } });

        if (!user) {
            return res.status(404).json({ msg: "Não foi encontrado nenhum usuário!" });
        }

        // Exemplo de retorno de usuário encontrado
        return res.status(200).json({ msg: "Usuário encontrado!", user });

    } catch (error) {
        return res.status(500).json({ msg: "Erro no servidor", error });
    }
}

module.exports = userLogin;