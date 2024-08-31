const validationLogin = async (req, res, next) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome) {
            return res.status(422).json({ msg: "O nome é obrigatorio!" });
        }
        if (!email) {
            return res.status(422).json({ msg: "O email é obrigatorio!" });
        }
        if (!senha) {
            return res.status(422).json({ msg: "O senha é obrigatorio!" });
        }

    } catch (error) {
        console.log("OPS! ocorreu um erro de middleware!", error)
    }

}

module.exports = validationLogin;