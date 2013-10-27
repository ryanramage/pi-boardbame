var express = require('express'),
    hid = require('hidstream'),
    devices = hid.getDevices(),
    FakeKeyboard = require('./test/keyboard_mock'),
    Keyboard = require('./lib/keyboard'),
    Game = require('./lib/game'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(8081);

console.log(devices);

var actual_keyboard = new hid.device(devices[0].path);
//var fake = new FakeKeyboard();
var keyboard = new Keyboard(actual_keyboard);
var game = new Game(keyboard);


app.use( '/', express.static('./static'));
io.sockets.on('connection', function (socket) {
    socket.emit('game', game.getGameState());
    game.on('data', function(data){
        socket.emit('game', data);
    })
});
