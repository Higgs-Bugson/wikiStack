var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');


app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send('Something broke!')
  })

app.listen(3000, function(){
    console.log('listening on port 3000');
  });

app.get('/', function(req,res,next){
        console.log("it's working");
       res.send('It is working');
  });
  
  