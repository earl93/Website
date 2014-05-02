var express=require('express');
var async=require('async');
var app=express();
app.set('port', process.env.PORT || 3000);
var io = require("socket.io").listen(app.listen(app.get('port')) ,{log: false});

console.log("Listening on port " + app.get('port'));

app.use("/static", express.static(__dirname + "/static"));

app.get('/', function(req, res){
	res.render('index.jade');
});
app.get('/index', function(req, res){
	res.render('index.jade');
});
app.get('/blog', function(req, res){
	res.render('blog.jade');
});
app.get('/projects', function(req, res){
	res.render('projects.jade');
});

io.sockets.on("connection",function(socket){
	console.log("connection detected");
	
});








