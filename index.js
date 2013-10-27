var express = require('express'),
    fake = true,
    device_keyboard,
    //hid = require('hidstream'),
    //devices = hid.getDevices(),
    FakeKeyboard = require('./test/keyboard_mock'),
    Keyboard = require('./lib/keyboard'),
    Game = require('./lib/game'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(8081);

if (fake) {
    device_keyboard = new FakeKeyboard();
} else {
    device_keyboard = new hid.device(devices[0].path);
}

var keyboard = new Keyboard(device_keyboard);
var game = new Game(keyboard);

app.use( '/', express.static('./static'));
io.sockets.on('connection', function (socket) {
    socket.emit('game', game.base_state);
    game.on('data', function(data){
        socket.emit('game', data);
    })
});
