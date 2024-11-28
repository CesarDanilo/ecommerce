const { Users } = require("../../../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validationLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    if (!email) {
        return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" });
    }

    try {
        const user = await Users.findOne({ where: { email: email } });

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado!" });
        }

        // Check password match
        const checkPassword = await bcrypt.compare(senha, user.senha);

        if (!checkPassword) {
            console.log("Senha incorreta")
            return res.status(422).json({ msg: "Senha incorreta!" });
        }

        // Generate JWT token
        const secret = process.env.SECRET;
        if (!secret) {
            return res.status(500).json({ msg: "Secret key not defined!" });
        }

        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' }); // Define an expiration time for the token
        const dados = { "email": user.email, "id": user.id, "nome": user.nome }
        return res.status(200).json({ msg: "Autenticação realizada com sucesso!", token, dados });
        next()

    } catch (error) {
        console.error("Erro ao autenticar o usuário:", error);
        return res.status(500).json({ msg: "Erro interno do servidor!" });
    }
}

module.exports = validationLogin;
