const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server);

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/p1', function(req,res) {
    res.sendFile(__dirname + '/public/p1.html');
});

app.get('/p2', function(req,res) {
    res.sendFile(__dirname + '/public/p2.html');
});

/************* SOCKET *************/
let p1Score = 0;
let p2Score = 0;

socketIO.on('connection', function(socket){
    console.log(socket.id + ' has connected!');

    socket.on('p1_score_increase',function(data){
        p1Score++;
    });
    socket.on('p2_score_increase',function(data){
        p2Score++;
    });

    socket.on('fight_event',function(data){
        if (p1Score > p2Score){
            socketIO.sockets.emit("Player 1 won the fight");
            p1Score = 0;
            p2Score = 0;
        }
        else if (p2Score > p1Score){
            socketIO.sockets.emit("Player 2 won the fight");
            p1Score = 0;
            p2Score = 0;
        }
        else {
            socketIO.sockets.emit("Keep collecting");
        }
    });
});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);