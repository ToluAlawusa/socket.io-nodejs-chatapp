var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

	// server.createServer(app);
	// io.listen(server);

var Users = [];
var Connections = [];
var PORT = 5000;

server.listen(PORT, function(){
	console.log('Express Server Started on port '+ PORT +'!');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});