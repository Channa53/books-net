var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    bookId: {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model('Book', bookSchema)