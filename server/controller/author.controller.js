const Author = require('../model/author.model');

module.exports = {
    createAuthor: (request, response) => {
        const {authorName} = request.body;
        Author.create({
            authorName: authorName
        })
        .then(author => response.json(author))
        .catch(err=> response.status(400).json(err))
    }
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
    .then(authorname=> response.json(authorname))
    .catch(err=> response.status(400).json(err))

}


module.exports.listAllAuthors = (request, response) => {
    Author.find({})
    .then(author=> response.json(author))
    .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
        .then(deleteConfirmation=> response.json(deleteConfirmation))
        .catch(err=>console.log(err))
}
