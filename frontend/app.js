const express = require("express");
const app = express();
const router = require('./router/main') (app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/views', express.static(__dirname + '/views'))
app.use('/images', express.static(__dirname + '/images'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.listen(3000,()=>{
    console.log("The server is running on Port 3000")
});