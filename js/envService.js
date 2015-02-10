var app = angular.module('albumArt');

app.service('envService', function($window) {
	
	this.getEnv = function() {
		return $window.env;
	}
	this.saveUsername = function(username) {
		$window.localStorage.setItem('username', username);
	}
	this.getUsername = function(username) {
		return $window.localStorage.getItem('username');
	}
	this.logOut = function() {
		return $window.localStorage.removeItem('username');
	}
});