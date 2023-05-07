const pockeNeas = require('../pockeNeas')
let ejs = require('ejs');
fs = require('fs');    
util = require('../util')
let people = ['geddy', 'neil', 'alex'];


require('../pockeNeas')

function randomJson(req, res){
    let rand = util.rand(0, 8)
    let response = { ...pockeNeas.data[rand] }
    delete response['Imagen']
    delete response['Frase']
    res.send(response)
}

function randomQuote(req, res){
  let rand = util.rand(0, 8)
  res.render('quote', {poke: pockeNeas.data[rand]})
}

module.exports ={
    randomJson:randomJson,
    randomQuote:randomQuote
}