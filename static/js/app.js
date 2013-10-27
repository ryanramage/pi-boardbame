
var connection = window.location.hostname;
var socket = io.connect('http://' + connection);

socket.on('keyboard', function (data) {
    console.log(data);

});