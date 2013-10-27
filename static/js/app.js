var socket = io.connect('http://localhost');
socket.on('keyboard', function (data) {
    console.log(data);

});