const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const passportJwt = require('./config/passportJWTstrategy');
app.use(express.urlencoded());
app.use(express.json());
app.use('/',require('./routes/indexRoutes'));
app.listen(port,(err)=>{
    if(err){
        console.log("Server is not ready");
        return false;
    }
    console.log("Server is running on port : "+port);
})