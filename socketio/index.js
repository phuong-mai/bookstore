var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    users = {};
server.listen(8888);
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));

io.on('connection', function(socket){
    socket.on('join', function(room){
        socket.join(room);
    
        //log other socket.io-id's in the room
        io.adapter.clients([room], (err, clients) => {
          console.log(clients);
        });
      });
 });
// io.sockets  .on('connection', function (socket) {
//     console.log('connected')
//     socket.on('connect', (data) => {
//         console.log(data)
//     })
//     socket.on('send', data => {
//         console.log(data)
//     })
   

//     socket.on('disconnect', function (data) {
//         /*         if (!socket.nickname) return;
//                 delete users[socket.nickname];
//                 updateNickNames(); */
//         console.log('DISCONNECTED')
//     });
// });