const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    console.log('hello users!');
    res.send('hello users!');
});

module.exports = router;