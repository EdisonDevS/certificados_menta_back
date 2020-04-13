var app = require('./app')
var port = 3700

var server = require('http').Server(app)

server.listen(port, () => {
    console.log('server up')
})