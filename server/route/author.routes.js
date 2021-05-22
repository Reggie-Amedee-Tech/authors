const AuthorController = require('../controller/author.controller');

module.exports = function(app) {
    app.post('/api/author', AuthorController.createAuthor)
    app.put('/api/author/:id',AuthorController.updateAuthor)
    app.get('/api/authors', AuthorController.listAllAuthors)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}