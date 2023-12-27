//console.log('Welcome to mylab');

//1. Import Area
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send('Good morning')
  })

  app.get('/home', function (req, res) {
    res.send('Good evening')
  })

app.listen(3000)

