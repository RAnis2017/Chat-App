const path = require('path');
const http = require('http');
const express = require('express')
const { generateMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app)
var io = socketIO(server);

console.log(__dirname + '/../public');
console.log(publicPath);
app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New User connected');


    socket.emit("newMessage", generateMessage('Admin', 'Welcome to chat app'));

    socket.broadcast.emit('newMessage', generateMessage("Admin", "New User Just Joined. Be Nice!"));

    socket.on('createMessage', (message) => {
        console.log("createMessage", message);
        io.emit('newMessage', generateMessage(message.from, message.text));

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });



    socket.on('disconnect', () => {
        console.log('Client Disconnected from server');
    });
});


app.get('/', function(req, res) {
    res.render("index.html");
});

server.listen(port, function() {
    console.log(`Server is up on ${port}`);
});