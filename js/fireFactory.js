var app = angular.module('albumArt');

app.factory("chatMessages", function($firebase, $rootScope) {

    // var url = "https://albumart.firebaseio.com";

    var ref = new Firebase($rootScope.url);

    return $firebase(ref).$asArray();

});