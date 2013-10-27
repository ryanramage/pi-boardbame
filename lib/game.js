module.exports = game;

function game(keyboard, logic) {

    var state = logic.startState();

    var last_keyboard_state;
    keyboard.on('data', function(new_keyboard_state){
        var changes = detect.changes(last_keyboard_state, new_keyboard_state);
        logic.modify(changes);
    });
}