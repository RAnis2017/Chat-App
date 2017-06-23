const path = require('path');
const http = require('http');
const express = require('express')
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