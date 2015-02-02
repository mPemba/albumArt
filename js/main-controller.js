var app = angular.module('albumArt');

app.controller('main-controller', function($scope, itunesService) {

    var finalArray = [];

    $scope.getSongData = function() {
    	itunesService.getMusic($scope.artist).then(function(res) {
    		newVar = res.data.results;
    		console.log(res);
    		for (var key in newVar) {
    			finalArray.push({
    				AlbumArt: newVar[key].artworkUrl100
    			})
    		}
    	})
    }

    $scope.songData = finalArray;

	$scope.gridOptions = {
		filterOptions: $scope.search,
		data: 'songData',
		height: '500px',
		sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
		columnDefs: [
		    {field: 'AlbumArt', displayName: 'albumArt', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
		]
	};
});