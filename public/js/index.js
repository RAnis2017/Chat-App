 var socket = io();

 socket.on('connect', function() {
     console.log('Connected to server');

     //  socket.emit("createMessage", {
     //      to: 'Raza',
     //      text: 'Hey. This is Hasan.'
     //  });
 });

 socket.on('disconnect', function() {
     console.log('Disconnected from server');
 });

 //  socket.on("newEmail", function(email) {
 //      console.log('New email', email);
 //  });
 socket.on('newMessage', (message) => {
     console.log("Message", message);
 });