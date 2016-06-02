var app = angular.module("computer", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
	$routeProvider

	.when("/main",{
		templateUrl: "main.html",
		controller: "mainController"
	})
	.when("/about", {
		templateUrl: "about.html",
		controller: "mainController"
	})
	.when("/services", {
		templateUrl: "services.html",
		controller: "serviceController"
	})
	.when("/contact", {
		templateUrl: "contact.html",
		controller: "contactController"
	})
	.otherwise({redirectTo:"/main"});
}]);

app.controller("mainController", [ "$scope", function($scope) {

}]);

app.controller("serviceController", [ "$scope", "$http", function($scope, $http) {
	$http.get("services.json").then(function(response) {
		$scope.services = response.data;
	})
}]);
app.controller("contactController", [ "$scope", function($scope) {

}]);
