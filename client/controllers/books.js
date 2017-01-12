var myApp = angular.module('myApp');

myApp.
controller('BooksController',
		['$scope', '$http', '$location','$stateParams','$state',
		 function($scope, $http, $location, $stateParams,$state){
		 	console.log('BooksController loaded');
		 	$scope.getBooks = function() {
		 		$http.get('/api/books')
		 		.then(function(response) {
		 			$scope.books = response.data;
		 		});
		 	};


		 	$scope.getBook = function() {
		 		var id = $stateParams.id;
		 		$http.get('/api/books/'+id)
		 		.then(function(response) {
		 			$scope.book = response.data;
		 		});
		 	};

		 	$scope.addBook = function() {
		 		console.log('addBook called');
		 		console.log($scope.book);
		 		$http.post('/api/books/', $scope.book)
		 		.then(function(response) {
		 			$state.go('home');
		 		}, function(err) {
		 			console.log(err);
		 		});
		 	};

		 	$scope.updateBook = function(){
		 		var id = $stateParams.id;
		 		$http.put('/api/books/'+id, $scope.book)
		 		.then(function(response) {
		 			$state.go('home');
		 		}, function(err) {
		 			console.log(err);
		 		});
		 	};

		 	$scope.deleteBook = function(id) {
		 		//var id = $stateParams.id;
		 		$http.delete('api/books/'+id, $scope.book)
		 		.then(function(response) {
		 			console.log("Book deleted");
		 			$state.go('home');
		 		}, function (err) {
		 			console.log(err);
		 		});
		 	};


		 }]);