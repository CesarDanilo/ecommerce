const { Users } = require("../../../database/models");
const bcrypt = require("bcrypt");

const validationLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    if (!email) {
        return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" });
    }

    const user = await Users.findOne({ where: { email: email } });

    if (!user) {
        return res.status(404).json({ msg: "Usuario não encontrado!!!" });
    }

    //check password match
    const checkpassword = await bcrypt.compare(senha, user.senha)

    if (!checkpassword) {
        return res.status(422).json({ msg: "A senha incorreta!!" });
    }

}
module.exports = validationLogin;