var app = angular.module('albumArt');

app.service('itunes-service', function($http, $q) {
	this.getMusic = function(artist) {
		var dfd = $q.defer();
		$http({
			method: 'JSONP',
			url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
		}).then(function(res) {
			var data = res.data.results;
			dfd.resolve(res);
		}), 

		return dfd.promise;
	}
});