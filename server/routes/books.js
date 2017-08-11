var express = require('express');
var router = express.Router();
var Book = require('../models/book');


// use get when you want to get data from the server
router.get('/', function(req, res, next){
    Book.find().exec(function(err, books){
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'Success',
            obj: books 
        });
    });
});

// use post when you want to send data to the server
router.post('/', function (req, res, next){
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

// route function to update data
router.patch('/:id', function(req, res, next){
    Book.findById(req.params.id, function(err, book){
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!book) {
            return res.status(500).json({
                title: 'No Book Found!',
                error: {message: "Book not found"}
            });
        }

        book.name = req.body.name;
        book.author = req.body.author;

        book.save(function(err, result){
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result 
            });
        });
    });
});

router.delete('/:id', function(req, res, next){
    Book.findById(req.params.id, function(err, book){
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if (!book) {
            return res.status(500).json({
                title: 'No Book Found!',
                error: {message: "Book not found"}
            });
        }

        book.remove(function(err, result){
            if (err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result 
            });
        });
    });
});
module.exports = router;