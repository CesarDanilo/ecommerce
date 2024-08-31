const jwt = require("jsonwebtoken");

const checktoken = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Usuario não encontrado!" });
    }

    try {
        const secret = process.env.SECRET;
        jwt.verify(token, secret);

        next();

    } catch (error) {
        res.status(400).json({ msg: "Token Invalido!" })
    }

}

module.exports = checktoken;