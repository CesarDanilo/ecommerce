const { Users } = require("../../../database/models");

const validationLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    if (!email) {
        return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" });
    }

    const usersExists = await Users.findOne({ where: { email: email } });

    if (!usersExists) {
        return res.status(422).json({ msg: "Usuario não encontrado!!!" });
    }

}
module.exports = validationLogin;