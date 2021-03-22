let redis = require('redis');
let redisAdapter = require('socket.io-redis');

module.exports = function (io) {
    let pub = redis.createClient(6379, 'localhost', {
        detect_buffers: true,
        return_buffers: true
    });

    let sub = redis.createClient(6379, 'localhost', {
        detect_buffers: true,
        return_buffers: true
    });

    io.adapter(redisAdapter({
        pubClient: pub,
        subClient: sub
    }));

    io
        .on('connection', function(socket){
            console.log("connect");

            socket.on('mess', function(data){
                console.log("connect");
            })

        });
}

// res.send(req.useragent);
    
//     let redis = require('redis');
//     let redisAdapter = require('socket.io-redis'); 
    
//       let pub = redis.createClient(6379, 'localhost', {
//           detect_buffers: true,
//           return_buffers: true
//       });
//       let sub = redis.createClient(6379, 'localhost', {
//           detect_buffers: true,
//           return_buffers: true
//       });
//       io.adapter(redisAdapter({
//           pubClient: pub,
//           subClient: sub
//       }));
  
//       io.on('connection', () => {
//          // console.log(client.id);
//           console.log("không thấy đâu cả")
//         });
//       io.on('connection', function(socket){
//         console.log("connection to socket");
//         socket.emit('hello', 'can you hear me?');
//         socket.on('mess', function(data){
//           console.log("connect");
//       })

//       });