var app = angular.module('albumArt', ["firebase"]);

app.run(function($rootScope) {
	$rootScope.url = "https://albumart.firebaseio.com";
})