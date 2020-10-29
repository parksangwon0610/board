const crypto = require('./cryptoUtils');
const jwt = require('../config/jwt');

module.exports = {
  checkApiKey(req, res, next) {
    const key = req.headers.api_key;
    const apiKey = crypto.hashing(key);
    if (apiKey && apiKey === jwt.secret) {
      next();
    } else {
      res.sendStatus(401);
    }
  },
};
