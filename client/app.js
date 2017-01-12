var myApp  = angular.module('myApp', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/books.html',
			controller: 'BooksController'
		})
		.state('book_details',{
			url: '/books/details/:id',
			templateUrl: 'views/book_details.html',
			controller: 'BooksController'
		})
		.state('add_book', {
			url: '/books/add',
			templateUrl: 'views/add_book.html',
			controller: 'BooksController'
		})
		.state('edit_book', {
			url: '/books/edit/:id',
			templateUrl: 'views/edit_book.html',
			controller: 'BooksController'
		})
		/*
		.state('delete_book', {
			url: '/books/delete/:id',
			templateUrl: '',
			controller: 'BooksController'
		})*/
		;
	}
]);




	/*
	$routeProvider.when('/', {
		controller: 'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books', {
		controller: 'BooksController',
		templateUrl: 'views/books.html'
	})
	.when('/books/details/:id', {
		controller: 'BooksController',
		templateUrl: 'views/book_details.html'
	})
	.when('/books/add', {
		controller: 'BooksController',
		templateUrl: 'views/add_book.html'
	})
	.when('/books/edit/:id', {
		controller: 'BooksController',
		templateUrl: 'views/edit_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode({
	enabled: true,
	requireBase: false,
	rewriteLinks: true
	});
*/
