const validationLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    if (!email) {
        return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    }
    if (!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" });
    }

}
module.exports = validationLogin;