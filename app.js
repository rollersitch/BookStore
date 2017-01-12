var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



var Genre = require('./models/genre');
var Book = require('./models/book');

var app = express();

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


app.get('/', function(req,res) {
	var html = "<html> <head> <title>RESTful API</title>" +
				"<style> body {text-align:center; font-size: 30px; color: red;} </style>" +
				"</head><body><h1>Please use /api/books or /api/genres!</h1></body></html>";
	res.send(html);
});


app.get('/api/genres', function(req,res) {
	Genre.getGenres(function(err, genres){
		if(err) {
			throw err;
		}
		res.json(genres);
	});
});


app.get('/api/books', function(req,res) {
	Book.getBooks(function(err, books){
		if(err) {
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', function(req,res) {
	Book.getBookById(req.params._id, function(err, book){
		//console.log(req.params._id);
		if(err) {
			throw err;
		}
		res.json(book);
	});
});


/* The following post methods adds whatever is inserted by the api users
*  into the dataabase. In production code, we would want to identify the single
*  fields of the request and validate them (there should be some automtic mongoose module for this).
*  We may also want some kind of authentication ---> See my sample project
*  Passport Login System for an example.
*/

app.post('/api/genres', function(req,res) {
	var genre = req.body; // Here comes body-parser
	Genre.addGenre(genre, function( err, genre){
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

app.post('/api/books', function(req,res) {
	var book = req.body; // Here comes body-parser
	Book.addBook(book, function( err, book){
		if(err) {
			throw err;
		}
		res.json(book);
	});
});


app.put('/api/genres/:_id', function(req,res) {
	var _id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(_id, genre, {}, function(err,genre) {
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

app.put('/api/books/:_id', function(req,res) {
	var _id = req.params._id;
	var book = req.body;
	Book.updateBook(_id, book, {}, function(err,book) {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/genres/:_id', function(req,res) {
	var _id = req.params._id;
	var genre = req.body;
	Genre.deleteGenre(_id, function(err,genre) {
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

app.delete('/api/books/:_id', function(req,res) {
	var _id = req.params._id;
	var book = req.body;
	Book.deleteBook(_id, function(err,book) {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

app.listen(3000);
console.log('Starting server on port 3000....');