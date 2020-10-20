const crypto = require('./cryptoUtils');
const jwt = require('../config/jwt');

module.exports = {
    checkApiKey: function (req, res, next) {
        const key = req.headers.api_key;
        const api_key = crypto.hashing(key);
        if (api_key && api_key === jwt.secret) {
            next();
        } else {
            res.sendStatus(401);
        }
    }
}