var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
//var router = require('express').Router();
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , '/public')));
var server = app.listen((3000, function(){
    console.log('listening on port 3000');
  }));

  const env = nunjucks.configure('views', {noCache: true}); 
  app.set('view engine', 'html');
app.engine('html', nunjucks.render); 





 
  

  
// app.get('/', function(req,res,next){
//     console.log("it's working");
//    // res.send('/');
// });

  
  