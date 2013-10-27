

var events = require('events'),
    util = require("util");

var FakeKeyboard = function() {
    var me = this;
    events.EventEmitter.call(this);
    setInterval(function(){

        var how_many = 4; //Math.round(Math.random() * 5);
        console.log('how_many', how_many);
        var kc = [];
        for (var i = 0; i < how_many; i++) {
            kc.push(Math.round(Math.random() * 58))
        }
        me.emit('data', { keyCodes: kc});
    }, 1000);
}

util.inherits(FakeKeyboard, events.EventEmitter);

module.exports = FakeKeyboard;