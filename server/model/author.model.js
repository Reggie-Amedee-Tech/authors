const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: {type: String}
})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;

