var controller = require('./controllers/pokeController')

module.exports = {
    loadRoutes:function (app){
        app.get('/', controller.randomJson)
        app.get('/quotes', controller.randomQuote)
}
}