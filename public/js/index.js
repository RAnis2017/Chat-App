 var socket = io();

 socket.on('connect', function() {
     console.log('Connected to server');

 });

 socket.on('disconnect', function() {
     console.log('Disconnected from server');
 });

 //  socket.on("newEmail", function(email) {
 //      console.log('New email', email);
 //  });
 socket.on('newMessage', (message) => {
     console.log("Message", message);
     var li = jQuery('<li></li>');
     li.text(`${message.from}: ${message.text}`);

     jQuery("#messages").append(li);
 });

 socket.emit("createMessage", {
     from: 'Frank',
     text: 'Hey.'
 }, function(data) {
     console.log("Got it", data);
 });

 jQuery("#message-form").on('submit', function(e) {
     e.preventDefault();
     socket.emit('createMessage', {
         from: "User",
         text: jQuery('[name=message]').val()
     }, function() {

     });
 });