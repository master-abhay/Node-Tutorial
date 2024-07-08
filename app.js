//  const http = require('http');

//  //importing the exports:
//  const routes = require('./routes');

// const createServer = http.createServer(routes);

// createServer.listen(3000);


//starting fresh with express.js

const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');


const app = express();//this is like object..


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));



app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



app.listen(3000);





