var events = require('events'),
    util = require("util"),
    _  = require('underscore');

module.exports = Keyboard;

var mapping = {
    // player 1
    30 : [0, 1],
    31 : [0, 2],
    32 : [0, 3],
    33 : [0, 4],
    34 : [0, 5],
    35 : [0, 6],
    36 : [0, 7],
    37 : [0, 8],
    38 : [0, 9],
    39 : [0, 10],

    // player 2
    20 : [1, 1],
    26 : [1, 2],
    8  : [1, 3],
    21 : [1, 4],
    23 : [1, 5],
    28 : [1, 6],
    24 : [1, 7],
    12 : [1, 8],
    18 : [1, 9],
    19 : [1, 10],

    // player 3
    4 : [2, 1],
    22 : [2, 2],
    7 : [2, 3],
    9 : [2, 4],
    10 : [2, 5],
    11 : [2, 6],
    13 : [2, 7],
    14 : [2, 8],
    15 : [2, 9],
    51 : [2, 10],

    // player 4
    29 : [3, 1],
    27 : [3, 2],
    6  : [3, 3],
    25 : [3, 4],
    5  : [3, 5],
    17 : [3, 6],
    16 : [3, 7],
    54 : [3, 8],
    55 : [3, 9],
    56 : [3, 10]

}


function Keyboard(actual) {
    var me = this;

    events.EventEmitter.call(this);
    var debounced = _.debounce(function get(data) {
        if (!data.keyCodes) return;
        var mapped = [];
        for (var i = data.keyCodes.length - 1; i >= 0; i--) {
            var code = mapping[data.keyCodes[i]];
            if (code) {
                mapped.push( code );
            }
        }
        me.emit("data", mapped);
    }, 600);
    actual.on('data', debounced);
}

util.inherits(Keyboard, events.EventEmitter);



// example
// { modKeys: [], keyCodes: [ 55 ], charCodes: [], errorStatus: false }



