var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('mongoose-unique-validator');

var userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

userSchema.plugin(validator);

module.exports = mongoose.model('User', userSchema)