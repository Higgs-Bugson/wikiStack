var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require("nunjucks");

const models = require("./models");
const index = require("./routes")


const env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', index);
//use does not have to match the first arg exactly but get does

app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send('Something broke!');
  });

//   models.User.sync()
//   .then(function() {
//     console.log("User table created!");
//     return models.Page.sync();
//   })
// .then(function(){
//   console.log("Page table created!");
//   app.listen(3000, function(){
//     console.log("Server is now listening on port 3000!")
//   });
// })

// .catch(console.error.bind(console));
//the code above works to make individual tables
//so we made one tabke for the user
//and then we would need to make another table
//for the page...
//the code below allows us to create all tables 
//using the bd (database) -- which we had to import

models.db.sync()
.then(function () {
    console.log('All tables created!');
    app.listen(3000, function () {
        console.log('Server is listening (using db) on port 3000!');
    });
})
.catch(console.error.bind(console));

// If we make changes to a model definition in our JS application,
// we can replicate these changes in our PostgreSQL tables using
models.db.sync({force: true})
// this drops all tables then recreates them based on our JS definitions
  
// app.listen(3000, function(){
//    console.log('listening on port 3000');
//    });