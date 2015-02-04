var app = angular.module('albumArt');

app.controller('main-controller', function($scope, $firebase, itunesService, chatMessages) {
  
  var ref = new Firebase("https://albumart.firebaseio.com");
  var sync = $firebase(ref).$asArray();

  $scope.messages = chatMessages;

  $scope.addMessage = function(message) {
    $scope.messages.$add({content: message});
    $scope.message = "";
  };

  $scope.messages.$loaded(function(messages) {
    if (messages.length === 0) {
        messages.$add({content: "hey bud!"});
    };
  });

  var finalArray = [];

   $scope.getSongData = function() {
      itunesService.getMusic($scope.artist).then(function(res){
          console.log(res);
          $scope.musicData = res.data.results;
          var musicData = $scope.musicData;
          for (var key in musicData) {
            finalArray.push({
                albumArt: musicData[key].artworkUrl100
            });
          };
      });
   };
   $scope.songData = finalArray;

});