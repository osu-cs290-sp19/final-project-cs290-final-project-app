var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

// var twitData = require('./twitData') // no twit data??

var app = express();
var handlebars = require('express-handlebars');
var path = require('path');
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function(req, res, next) {
    res.status(200).render('home');
});

app.get('/todo', function(req, res, next) {
  res.status(200).render('ToDo');
});

app.listen(port, function () {
    console.log("== Server listening on port", port);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});