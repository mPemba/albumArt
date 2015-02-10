var app = angular.module('albumArt');

app.service('itunesService', function($http, $firebase, envService, $rootScope, $q) {
	
	var firebaseUrl = envService.getEnv().firebase;

	this.getMessages = function() {
		return $firebase(new Firebase(firebaseUrl + '/artMessages'))
	}

    this.getMusic = function(artist) {
   	  return $http({
   	  	method: 'JSONP',
   	  	url: 'https://itunes.apple.com/search?term=' + artist + '&limit=25&media=music&entity=musicArtist,album' + '&callback=JSON_CALLBACK'
   	  })
   }
});