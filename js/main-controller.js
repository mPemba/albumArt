var app = angular.module('albumArt');

app.controller('main-controller', function($scope, itunesService) {

  var finalArray = [];

  // $scope.search = {filterText: ''};

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