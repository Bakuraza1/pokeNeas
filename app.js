const express = require('express')
const app = express()
var routes = require('./routes.js')

app.use(express.static('public'))
app.set('view engine', 'ejs');
routes.loadRoutes(app)
app.listen(3000)
console.log('Server listening on port 3000')