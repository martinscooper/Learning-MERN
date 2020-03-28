const jwt = require('jsonwebtoken');
const config = require('config')
const JWT_SECRET = config.get('jwtSecret')

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    if (!token)
        res.status(401).json({
            msg: "No token, authorization denied"
        });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        //req.user = decoded;
        console.log(decoded);
        next();
    } catch (e) {
        res.status(400).json({
            msg: 'Token is not valid. BITCH'
        });
    };
}

module.exports = auth;