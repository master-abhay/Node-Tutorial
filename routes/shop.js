
const express = require('express');
const path = require('path');
const rooDir = require('../utils/path');

const router = express.Router();

router.get("/",(req, res, next) => {
    console.log("In the middleware_1!");
    res.sendFile(path.join(rooDir,'views','shop.html'))
});

module.exports = router;