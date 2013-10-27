module.exports = Game;

var events = require('events'),
    util = require("util");


function Game(keyboard) {
    var me = this;
    events.EventEmitter.call(this);

    me.base_state =  {
        round: 0,
        current_player: 0,
        players: [
            { blight: 0 },
            { blight: 0 },
            { blight: 0 },
            { blight: 0 }
        ]
    };
    keyboard.on('data', function(data){
        if (!data.length) return;
        for (var i = data.length - 1; i >= 0; i--) {
            var row = data[i];
            var player_state = me.base_state.players[ row[0]  ];
            player_state.blight = row[1];
        };
        me.emit('data', me.base_state);
    });
}

util.inherits(Game, events.EventEmitter);