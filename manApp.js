var express = require("express");
var app = express();
var fs =require('fs');
var colors =require('colors');
var objJson = require('./about.json');

app.set('view engine', 'ejs');

app.get('/', function (req, res) { // '/' is the root folder
  //res.send('<h1><font color ="olive"><center>Home Page</font></h1>');
  var obj = {title : 'Home Page', 
  			subTitle : 'Node.js',
  			paragraph: 'This is the Mandatory Assignment 1'
  	};
  
  	
  res.render('index', obj);

});

app.get('/about', function(req, res){
	
		res.render('about', objJson);
	});
	//res.render('contact', objJSON);





app.get('/*', function(req, res){
	res.send('<h1><center>BAD ROUTE</center></h1>'.red)
});
app.listen(3000);

