var app = angular.module('albumArt');

app.controller('main-controller', function($scope, itunesService) {

    var finalArray = [];

    $scope.getSongData = function() {
    	itunesService.getMusic($scope.artist).then(function(res) {
    		$scope.musicData = res.data.results;
    		var musicData = res.data.results;
    		console.log(res);
    		for (var key in musicData) {
    			finalArray.push({
    				AlbumArt: musicData[key].artworkUrl100,
    			})
    		}
    	})
    }

    $scope.songData = finalArray;






	// $scope.gridOptions = {
	// 	filterOptions: $scope.search,
	// 	data: 'songData',
	// 	height: '110px',
	// 	columnDefs: [
	// 	    {field: 'AlbumArt', displayName: 'albumArt', width: '25%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex(0)"><img src="{{row.getProperty(col.field)}}"></div>'},
	// 	    {field: 'AlbumArt', displayName: 'albumArt', width: '25%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex(1)"><img src="{{row.getProperty(col.field)}}"></div>'},
	// 	    {field: 'AlbumArt', displayName: 'albumArt', width: '25%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex(2)"><img src="{{row.getProperty(col.field)}}"></div>'},
	// 	    {field: 'AlbumArt', displayName: 'albumArt', width: '25%', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex(3)"><img src="{{row.getProperty(col.field)}}"></div>'},
	// 	]
	// };


});