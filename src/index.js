var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Vakande is watching you.')
})



app.listen(80, function () {
  console.log('Vakanding at 8080!')
})