const session = async (req, res, next) => {
    const { nome } = req.body;
    if (nome) {
        req.session.user = { nome };
        res.json({ msg: 'Logged in successfully' });

    } else {
        res.status(400).json({ msg: 'Invalid username' });
    }
}

module.exports = session;