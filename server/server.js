var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./routes/index');
var books = require('./routes/books');

var port = 3000;

var app = express();
mongoose.connect('localhost:27017/books_net');

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(cookieParser());

//the order is important!
app.use('/book', books);
app.use('/', index);

app.listen(port, function(){
   console.log('Server started on port' + port); 
});