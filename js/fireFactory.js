var app = angular.module('albumArt');

app.factory("chatMessages", function($firebase, envService, itunesService, $rootScope) {

    var ref = new Firebase($rootScope.url);

    return $firebase(ref).$asArray();

});