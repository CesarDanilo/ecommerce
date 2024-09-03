const { Users } = require("../../../database/models");

const session = async (req, res, next) => {
    const { nome } = req.body;
    if (nome) {
        req.session.user = { nome };
        res.json({ msg: 'Logged in successfully' });

        const user = await Users.findOne({ where: { email: email } });

        res.redirect('/');


    } else {
        res.status(400).json({ msg: 'Invalid username' });
    }
}

module.exports = session;