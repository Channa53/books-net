var express = require('express');
var router = express.Router();
var Book = require('../models/book');

router.post('/', function (req, res, nex){
    var book = new Book({
        name: req.body.name,
        author: req.body.author
    });
    book.save(function(err, result){
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result //the book object as it saved in the DB, including its ID.
        });
    });
});
module.exports = router;