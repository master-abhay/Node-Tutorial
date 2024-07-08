
const express = require('express');

const path = require('path');
const rooDir = require('../utils/path');

const router = express.Router();




router.get("/add-product",(req, res, next) => {
    console.log("In the middleware_1!");
    // res.send("<html><body><form action='/admin/product' method='POST'><input name='title'/><button type='submit'>Add Product</button></form></body></html>");

    res.sendFile(path.join(rooDir,'views','add-product.html'));

});

router.post("/product",(req,res,next)=>{
    // res.send("<h1>Response from product...</h1>");
    console.log(req.body);
    res.redirect('/');

});

module.exports = router;