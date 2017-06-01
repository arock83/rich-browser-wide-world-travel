"use strict";

app.controller("bookCtrl", function($scope, bookFactory) {
	bookFactory.getBooks()
	.then(function(object) {
		$scope.books = object;
		console.log("$scope", $scope.books);
	});
});