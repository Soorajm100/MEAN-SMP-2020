var express = require('express');
var path = require('path');
const http = require('http');
const socketio = require('socket.io');
var app = express();

const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// initialize a socket
io.on('connection', function(socket){

    socket.on('add user', function(username){
        socket.username = username;
        socket.broadcast.emit('user joined', {
            username: socket.username
        });
    });

    socket.on('new message', function(data){
        console.log(data);
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });

    // socket.emit: emit to the client
    // socket.broadcast.emit: emit to everyone except for the client
    // io.emit: emit to everyone on the system
});

server.listen(4000, function(req, res){
    console.log("Server listening on port 4000");
});