var app = angular.module('albumArt');

app.controller('login-controller', function($scope, $firebase, $location, envService, itunesService, chatMessages) {

	$scope.login = function(username) {
		envService.saveUsername(username);
		$location.path('/artView');
	}
});