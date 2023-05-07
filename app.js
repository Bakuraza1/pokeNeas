const express = require('express')
const app = express()
var routes = require('./routes.js')
const port = 80

app.use(express.static('public'))
app.set('view engine', 'ejs');
routes.loadRoutes(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  