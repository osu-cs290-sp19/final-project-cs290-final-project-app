var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var path = require('path');
var port = process.env.PORT || 3000;

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function(req,res){
    
});