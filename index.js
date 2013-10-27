var express = require('express'),
    FakeKeyboard = require('./test/keyboard_mock'),
    Keyboard = require('./lib/keyboard'),
    Game = require('./lib/game'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(8081);


var fake = new FakeKeyboard();
var keyboard = new Keyboard(fake);
var game = new Game(keyboard);


app.use( '/', express.static('./static'));
io.sockets.on('connection', function (socket) {
    game.on('data', function(data){
        socket.emit('game', data);
    })
});
