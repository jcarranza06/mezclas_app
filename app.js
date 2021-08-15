(function () {
'use strict';
//console.log("funcionando")
angular.module('Mezclas', [])
.controller('Controlador1', Controlador1);



Controlador1.$inject = ['$scope'];
function Controlador1($scope) {
	var c=this;

	$scope.color = "green";
	$scope.visivilityP1 = "show";
	$scope.visivilityP2 = "none";
	$scope.visivilityP3 = "none";



	$scope.resistenciaPromedio=0;
	$scope.asentamientoMax=0;
	$scope.asentamientoMaxString="";
	$scope.volumenUnitarioDeAgua=0;
	$scope.aireAtrapado_Incorporado=0;
	$scope.relacionAguaCemento=0;
	$scope.factorCemento=0;
	$scope.ContenidoAgregadoGrueso=0;
	$scope.sumaVolumenesConocidosM=0;
	$scope.sumaVolumenesConocidosKg=0;
	$scope.volumenAbsolutoAgregadoFino=0;
	$scope.pesoAgregadoFinoSeco=0;
       

	$scope.setVisiblePanel = function(i){
		$scope.color = "red";
		if (i==1){
			document.getElementById('panelIngreso').style.display = 'inline-block';
			document.getElementById('panelResultados').style.display = 'none';
			console.log("1");
		}else if(i==2){
			document.getElementById('panelIngreso').style.display = 'none';
			document.getElementById('panelResultados').style.display = 'inline-block';
			console.log("2");
		}
	}
	

	$scope.setVisibleIngreso = function(i){
		$scope.color = "red";
		document.getElementById('pesoEspecifico').style.display = 'none';
		document.getElementById('absorcion').style.display = 'none';
		document.getElementById('ContenidoHumedad').style.display = 'none';
		document.getElementById('moduloFineza').style.display = 'none';
		document.getElementById('tamanoPesoSeco').style.display = 'none';
		
		if (i==1){
			document.getElementById('pesoEspecifico').style.display = 'inline-block';
			console.log("1");
		}else if(i==2){
			document.getElementById('absorcion').style.display = 'inline-block';
			console.log("2");
		}else if(i==3){
			document.getElementById('ContenidoHumedad').style.display = 'inline-block';
			console.log("3");
		}else if(i==4){
			document.getElementById('moduloFineza').style.display = 'inline-block';
			console.log("4");
		}else if(i==5){
			document.getElementById('tamanoPesoSeco').style.display = 'inline-block';
			console.log("5");
		}
	}
	
	$scope.setVisibleResultado = function(i){
		$scope.color = "red";

		

		document.getElementById('resistenciaTamMax').style.display = 'none';
		document.getElementById('asentamiento').style.display = 'none';
		document.getElementById('volumenAgua').style.display = 'none';
		document.getElementById('contAire').style.display = 'none';
		document.getElementById('relacion').style.display = 'none';
		document.getElementById('factCemento').style.display = 'none';
		document.getElementById('contAgreGrueso').style.display = 'none';
		document.getElementById('volumenesAbsolut').style.display = 'none';
		document.getElementById('agregadoFino').style.display = 'none';
		document.getElementById('correccionPoHumedadAgregado').style.display = 'none';
		document.getElementById('proporcionPeso').style.display = 'none';
		
		if (i==1){
			document.getElementById('resistenciaTamMax').style.display = 'inline-block';

			console.log("1" + $scope.resistencieEnCompresion);
		}else if(i==2){
			document.getElementById('asentamiento').style.display = 'inline-block';
			console.log("2");
		}else if(i==3){
			document.getElementById('volumenAgua').style.display = 'inline-block';
			console.log("3");
		}else if(i==4){
			document.getElementById('contAire').style.display = 'inline-block';
			console.log("4");
		}else if(i==5){
			document.getElementById('relacion').style.display = 'inline-block';
			console.log("5");
		}else if(i==6){
			document.getElementById('factCemento').style.display = 'inline-block';
			console.log("6");
		}else if(i==7){
			document.getElementById('contAgreGrueso').style.display = 'inline-block';
			console.log("7");
		}else if(i==8){
			document.getElementById('volumenesAbsolut').style.display = 'inline-block';
			console.log("8");
		}else if(i==9){
			document.getElementById('agregadoFino').style.display = 'inline-block';
			console.log("9");
		}else if(i==10){
			document.getElementById('correccionPoHumedadAgregado').style.display = 'inline-block';
			console.log("10");
		}else if(i==11){
			document.getElementById('proporcionPeso').style.display = 'inline-block';
			console.log("11");
		}
	}
	
}



})();