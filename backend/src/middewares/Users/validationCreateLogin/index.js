const { Users } = require("../../../database/models");
const bcrypt = require("bcrypt");

const validationCreateLogin = async (req, res, next) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome) {
            return res.status(422).json({ msg: "O nome é obrigatório!" });
        }
        if (!email) {
            return res.status(422).json({ msg: "O e-mail é obrigatório!" });
        }
        if (!senha) {
            return res.status(422).json({ msg: "A senha é obrigatória!" });
        }

        // check if users exists
        const usersExists = await Users.findOne({ where: { email: email } });
        if (usersExists) {
            return res.status(422).json({ msg: "Já existe um usuário com esse e-mail, por favor utilize outro!" });
        }

        //create password
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(senha, salt);

        req.body.senha = passwordHash;

        next();

    } catch (error) {
        console.log("OPS! ocorreu um erro de middleware!", error);
        return res.status(500).json({ msg: "Ocorreu um erro interno no servidor." });
    }
};

module.exports = validationCreateLogin;
