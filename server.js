var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

// var twitData = require('./twitData') // no twit data??

var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var handlebars = require('express-handlebars');
var path = require('path');
var port = process.env.PORT || 3000;

var todoData = require('./todoData');

var MongoClient = require('mongodb').MongoClient;
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

MongoClient.connect(mongoUrl, function (err, client) {
  if (err) {
    console.log(mongoUrl);
    throw err;
  }
  db = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});

app.get('/', function(req, res, next) {
    res.status(200).render('home');
});

app.get('/todo', function(req, res, next) {
  var todocollection = db.collection('todo');
  todocollection.find({}).toArray(function (err, todo) {
    if(err)
    {
      res.status(500).send({
        error: "Error Fetching todos from Database"
      });
    }
    else {
      console.log("== todo:", todo);
      res.status(200).render('ToDo', {
        todos: todo
      });
    }
  });
  
  // res.status(200).render('ToDo', {
  //   todos: todoData
  // });
});

app.post('/todo', function(req, res, next) {
  var todocollection = db.collection('todo');
    if(req.body.name && req.body.date){
        var newtodo = {
           title: req.body.title,
           date: req.body.date
        };
        todocollection.updateOne(
            { title: todoTitle },
            { date: date },
            function( err, result)
            {
              if (err) {
                res.status(500).send({
                  error: "Error adding new todo"
                });
              } else {
                console.log("== update result:", result);
                if (result.matchedCount > 0) {
                  res.status(200).send("Success");
                } else {
                  next();
                }
              }
            }
          );
    }else{
        res.status(400).send("Req body missing name or date");
    }
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