var express = require('express'),
	app = express(),
	firebase = require("firebase"),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);


  var config = {
    apiKey: "AIzaSyDk1jPcYaDdpexd7LbNI1tTxU_EoE12l68",
    authDomain: "chat-socket-203d4.firebaseapp.com",
    databaseURL: "https://chat-socket-203d4.firebaseio.com",
    projectId: "chat-socket-203d4",
    storageBucket: "chat-socket-203d4.appspot.com",
    messagingSenderId: "357573768942"
  };

  firebase.initializeApp(config);


	// server.createServer(app);
	// io.listen(server);

var users = [];
var connections = [];
var PORT = 5000;

server.listen(PORT, function(){
	console.log('Express Server Started on port '+ PORT +'!');
});

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// });

app.get('/', function(req, res){
	res.status(200).json();
});

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);

	// Disconnect
	socket.on('disconnect', function(data){
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disonnected: %s sockets connected', connections.length);
	});

	// Send Message
	socket.on('submit message', function(data){
		io.sockets.emit('new message', {msg: data});
	});
	
});