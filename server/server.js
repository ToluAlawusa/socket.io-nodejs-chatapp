var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

	// server.createServer(app);
	// io.listen(server);

var users = [];
var connections = [];
var PORT = 5000;

server.listen(PORT, function(){
	console.log('Express Server Started on port '+ PORT +'!');
});

app.use(express.static(__dirname + '/../public'));

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
	connections.splice(connections.indexOf(socket), 1);
	console.log('Disonnected: %s sockets connected', connections.length);
});