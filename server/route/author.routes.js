const AuthorController = require('../controller/author.controller');

module.exports = function(app) {
    app.get('/api', AuthorController.index)
    app.post('/api/author', AuthorController.createAuthor)
    app.put('/api/author/:id', AuthorController.updateAuthor)
    app.get('/api/authors', AuthorController.listAllAuthors)
}