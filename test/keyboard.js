var FakeKeyboard = require('./keyboard_mock');
var Keyboard = require('../lib/keyboard');
var fake = new FakeKeyboard();

var keyboard = new Keyboard(fake);

keyboard.on('data', function(data){
    console.log('got', data);
})
