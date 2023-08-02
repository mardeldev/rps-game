const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('singleplayerindex');
})

module.exports = router;