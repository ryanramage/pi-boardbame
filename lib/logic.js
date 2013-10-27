module.exports: {
    startState: startState,
    modify: modify;
}

var base_state =  {
    round: 0,
    current_player: 0,
    players: [
        { blight: 0 },
        { blight: 0 },
        { blight: 0 },
        { blight: 0 }
    ]
};


function startState() {
    // lame deep clone
    return JSON.parse(JSON.stringify(base_state));
}

function modify(keyboard) {

    for (var i = keyboard.length - 1; i >= 0; i--) {
        keyboard[i]
    };
}