
var connection = window.location.hostname;
var socket = io.connect('http://' + connection);

var players_map = ["north", "east", "south", "west"];
var blight_map = ['seven', 'six', 'five', 'four', 'three', 'two', 'one', 'dead'];

socket.on('game', function (game) {
    if (!game.players) return;
    for (var i = game.players.length - 1; i >= 0; i--) {
        var blight = game.players[i].blight;
        var player_class = '.' + players_map[i];
        var blight_class = blight_map[blight];
        var $elem = $('.blight' + player_class);
        $elem.removeClass('one two three four five six seven dead');
        $elem.addClass(blight_class);
    };
});