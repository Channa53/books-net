var express = require('express');
var router = express.Router();
var Book = require('../models/book');

router.post('/', function (req, res, nex){
    var book = new Book({});
});
module.exports = router;