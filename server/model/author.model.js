const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type:  String,
        required: [true,  "Author Name is Required"],
        minlength: [3, 'Author has to be more then 3 characters!']
        
        
    }
}, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema);

