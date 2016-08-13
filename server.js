var mysql = require('mysql');
var express = require ('express');
var bodyparser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencode({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
})