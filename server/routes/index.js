var express = require('express');
var router = express.Router();
var Book = require('../models/book');

router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.get('/new-book/', function (req, res, next) {
    Book.find({}, function(err, docs){
        if (err){
            res.send('Error getting books!');
        }
        res.render('book.html', {books: docs}); // not outside book function because it's synchronic function!
    });
});

router.post('/new-book', function(req, res, next) {
    var book = new Book({
        name: req.body.name,
        author: req.body.author,
    });
    book.save();
    res.redirect('/new-book/');
});

module.exports = router;