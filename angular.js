console.log("Hello drom Script");
var myApp = angular.module('myApp',[]);
myApp.controller('parkingSystem', parkingSystem); 
	function parkingSystem($scope){
		$scope.name = "hello from Angular";
		$scope.parking = [
		{"place":1 , "raw":1  , "taken":false, "carNumber": ""},
		{"place":2 , "raw":1  , "taken":false , "carNumber": ""},
		{"place":3 , "raw":1  , "taken":false , "carNumber": ""},
		{"place":4 , "raw":1  , "taken":false , "carNumber": ""},
		{"place":5 , "raw":1  , "taken":false , "carNumber": ""},
		{"place":6 , "raw":2  , "taken":false , "carNumber": ""},
		{"place":7 , "raw":2  , "taken":false , "carNumber": ""},
		{"place":8 , "raw":2  , "taken":false , "carNumber": ""},
		{"place":9 , "raw":2  , "taken":false , "carNumber": ""},
		{"place":10, "raw":2  , "taken":false , "carNumber": ""},
		{"place":11, "raw":3  , "taken":false , "carNumber": ""},
		{"place":12, "raw":3  , "taken":false , "carNumber": ""},
		{"place":13, "raw":3  , "taken":false , "carNumber": ""},
		{"place":14, "raw":3  , "taken":false , "carNumber": ""},
		{"place":15, "raw":3  , "taken":false , "carNumber": ""},
		] ;

		
		$scope.freeSpaceID = 1;
		$scope.freeSpace = function() {
			for(var i=0 ; i <15 ; i++) {
				if ($scope.parking[i].taken == false) {
					$scope.freeSpaceID = $scope.parking[i].place;
					console.log($scope.freeSpaceID + '  is a free park place');
					break;

				}
			}
		}

		$scope.parkCar = function() {
			$scope.freeSpace();
			console.log('Parked Car Number is: '  + $scope.carNumber);
			$scope.parking[$scope.freeSpaceID - 1].taken = true;
			$scope.parking[$scope.freeSpaceID - 1].carNumber = $scope.carNumber;
		}

		$scope.removeCar = function($index) {
			$scope.parking[$index].taken = false;
			$scope.parking[$index].carNumber = "";
			console.log('removeCar ' + $index);

		}
}