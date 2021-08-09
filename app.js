(function () {
'use strict';
console.log("funcionando")
angular.module('Mezclas', [])
.controller('Controlador1', Controlador1);



Controlador1.$inject = ['$scope'];
function Controlador1($scope) {
	var c=this;

	$scope.color = "green";
	$scope.visivilityP1 = "show";
	$scope.visivilityP2 = "none";
	$scope.visivilityP3 = "none";

	$scope.setVisible = function(i){
		$scope.color = "red";
		if (i==1){
			$scope.visivilityP1 = "show";
			$scope.visivilityP2 = "none";
			$scope.visivilityP3 = "none";
		}else if(i==2){
			$scope.visivilityP1 = "none";
			$scope.visivilityP2 = "show";
			$scope.visivilityP3 = "none";
		}else if(i==3){
			$scope.visivilityP1 = "none";
			$scope.visivilityP2 = "none";
			$scope.visivilityP3 = "show";
		}
	}
	
	
}



})();