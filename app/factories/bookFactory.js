"use strict";

app.factory("bookFactory", function($q, $http) {
	let getBooks = () => {
		return $q((resolve, reject) => {
			$http.get("../data/guides.json")
			.then((object) => {
				console.log("data from json", object);
				resolve(object.data.guides);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return {getBooks};
});