const pockeNeas = require('../pockeNeas')
let ejs = require('ejs');
fs = require('fs');    
util = require('../util')
const os = require('os')


require('../pockeNeas')

function randomJson(req, res){
    let rand = util.rand(0, 8)
    let response = { ...pockeNeas.data[rand]}
    response['container'] = os.hostname()
    delete response['Imagen']
    delete response['Frase']
    res.send(response)
}

function randomQuote(req, res){
  let rand = util.rand(0, 8)
  res.render('quote', {poke: pockeNeas.data[rand], host:  os.hostname()})
}

module.exports ={
    randomJson:randomJson,
    randomQuote:randomQuote
}