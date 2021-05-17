const Author = require('../model/author.model');

module.exports.index = (request,response) => {
    response.json({
        message: "Author Databse"
    })
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(updateAuthor => response.json(updateAuthor))
    .catch(err => console.log(err))
}

module.exports.listAllAuthors = (request, response) => {
    Author.find({})
    .then(author=> response.json(author))
    .catch(err => response.json(err))
}
