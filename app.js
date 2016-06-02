var app = angular.module("computer", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider

	.when("/main",{
		templateUrl: "main.html",
		controller: "mainController"
	})
	.otherwise({redirectTo:"/main"})
}]);

app.controller("mainController", [ "$scope", function($scope) {
	console.log("this is mainControllers");
}]);