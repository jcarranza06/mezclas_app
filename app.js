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

	$scope.principalActual=1;
	$scope.ingresoActual=1;
	$scope.resultadoActual=1;

	$scope.resistenciaPromedio=0;
	$scope.tamanoMaxGranulometria=$scope.tamanoMAxAgregadoGrueso;
	$scope.slump=0;
	$scope.slumpStringMax="";
	$scope.slumpStringMin="";
	$scope.asentamientoMax=0;
	$scope.volumenUnitarioDeAgua=0;
	$scope.conOSinAire="";
	$scope.aireAtrapado_Incorporado=0;
	$scope.relacionAguaCemento=0;
	$scope.factorCemento=0;
	$scope.ContenidoAgregadoGrueso=0;
	$scope.sumaVolumenesConocidosM=0;
	$scope.sumaVolumenesConocidosKg=0;
	$scope.volumenAbsolutoAgregadoFino=0;
	$scope.pesoAgregadoFinoSeco=0;
	$scope.aguaEfectiva=0;
	$scope.agregadoFinoHumedo=0;
	$scope.agregadoGruesoHumedo=0;
	$scope.relacionAguaCementoDeDiseno=0;
	$scope.relacionAguaCementoEfectiva=0;
       
	
	$scope.setVisiblePanel = function(i){
		$scope.color = "red";
		$scope.calcular();
		if (i==1){
			document.getElementById('panelIngreso').style.display = 'inline-block';
			document.getElementById('panelResultados').style.display = 'none';
			$scope.principalActual=1;
			console.log("1");
		}else if(i==2){
			document.getElementById('panelIngreso').style.display = 'none';
			document.getElementById('panelResultados').style.display = 'inline-block';
			$scope.principalActual=2;
			console.log("2");
		}
	}
	

	$scope.setVisibleIngreso = function(i){
		$scope.color = "red";
		$scope.calcular();
		document.getElementById('pesoEspecifico').style.display = 'none';
		document.getElementById('absorcion').style.display = 'none';
		document.getElementById('ContenidoHumedad').style.display = 'none';
		document.getElementById('moduloFineza').style.display = 'none';
		document.getElementById('tamanoPesoSeco').style.display = 'none';
		
		$scope.ingresoActual=i;
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

		$scope.calcular();

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
		
		$scope.resultadoActual=i;

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

	$scope.siguiente=function(){
		if ($scope.principalActual==1){
			if($scope.ingresoActual<5){
				$scope.setVisibleIngreso($scope.ingresoActual+1);
			}else{
				$scope.setVisiblePanel(2);
			}
		}else{
			if($scope.resultadoActual<11){
				$scope.setVisibleResultado($scope.resultadoActual+1);
			}
			
		}
	}
	$scope.atras=function(){
		if ($scope.principalActual==1){
			if ($scope.ingresoActual>1){
				$scope.setVisibleIngreso($scope.ingresoActual-1);
			}
			
		}else{
			if($scope.resultadoActual>1){
				$scope.setVisibleResultado($scope.resultadoActual-1);
			}else{
				$scope.setVisiblePanel(1);
			}
			
		}
	}

	$scope.calcular = function(i){
		console.log("inicio calculo");
		try {
			determinarResistenciaPromedio();
		} catch (error) {
			console.error(error);
		}
		try {
			$scope.tamanoMaxGranulometria=$scope.tamanoMAxAgregadoGrueso;
		} catch (error) {
			console.error(error);
		}
		try {
			setAsentamiento();
		} catch (error) {
			console.error(error);
		}
		try {
			setVolumenAgua();
		} catch (error) {
			console.error(error);
		}
		try {
			setContenidoAire();
		} catch (error) {
			console.error(error);
		}
		try {
			setRelacion();
		} catch (error) {
			console.error(error);
		}
		
		try {
			setFactorCemento();
		} catch (error) {
			console.error(error);
		}
		try {
			setContenidoAgregadoGrueso();
		} catch (error) {
			console.error(error);
		}
		try {
			setVolumenesAbsolutos();
		} catch (error) {
			console.error(error);
		}
		try {
			setContenidoAgregadoFino();
		} catch (error) {
			console.error(error);
		}
		try {
			setCorreccionPorHumedad();
		} catch (error) {
			console.error(error);
		}
		try {
			setProporcionPeso();
		} catch (error) {
			console.error(error);
		}
		
	}

	function determinarResistenciaPromedio(){
		let a1=$scope.resistenciaEnCompresion + ($scope.desviacionEstandar*1.34);
		let a2=$scope.resistenciaEnCompresion + ($scope.desviacionEstandar*2.33) -35;
		if (a1>=a2){
			$scope.resistenciaPromedio=a1;
		}else if(a1<a2){
			$scope.resistenciaPromedio=a2;
		}
		console.log("a1: "+a1 +" a2: "+a2 + " resistenciaPromedio: " + $scope.resistenciaPromedio);
	}
	function setAsentamiento(){

		
		
		if($scope.a6===true && ($scope.a1===undefined||$scope.a1===false)&& 
								($scope.a2===undefined||$scope.a2===false)&& 
								($scope.a3===undefined||$scope.a3===false)&& 
								($scope.a4===undefined||$scope.a4===false)&& 
								($scope.a5===undefined||$scope.a5===false)){
									$scope.tipoEstructura="Concreto Ciclopeo";
								};
		console.log("se asent: "+ $scope.tipoEstructura);

		if($scope.tipoEstructura==="Concreto Ciclopeo"){
			$scope.slump = 2;
		}else{
			$scope.slump = 4;
		}

		let valoresSlump=[];

		if ($scope.a1===true){valoresSlump.push(3);valoresSlump.push(1);}
		if ($scope.a2===true){valoresSlump.push(3);valoresSlump.push(1);}
		if ($scope.a3===true){valoresSlump.push(4);valoresSlump.push(1);}
		if ($scope.a4===true){valoresSlump.push(4);valoresSlump.push(2);}
		if ($scope.a5===true){valoresSlump.push(3);valoresSlump.push(1);}
		if ($scope.a6===true){valoresSlump.push(2);valoresSlump.push(1);}

		
		$scope.slumpStringMax=Math.max.apply(null, valoresSlump);
		$scope.slumpStringMin=Math.min.apply(null, valoresSlump);
		
		console.log("Slump: "+$scope.slump+ " "+$scope.slumpStringMax+" "+$scope.slumpStringMin);
	}

	function setVolumenAgua(){
		$scope.conOSinAire =$scope.conOSinAireIncorporado;
		console.log($scope.conOSinAire+" "+ $scope.tamanoMAxAgregadoGrueso+" "+$scope.slump)
		const tablaVolumenAgua ={
			"Con aire incorporado":{
				2:{//Slump 2
					"3/8": 181,
					"1/2": 175,
					"3/4": 168,
					"1": 160,
					"1.5": 150,
					"2": 142,
					"3": 122,
					"4": 107
				},
				4:{//Slump 4
					"3/8": 202,
					"1/2": 193,
					"3/4": 184,
					"1": 175,
					"1.5": 165,
					"2": 157,
					"3": 133,
					"4": 119
				}
			},
			"Sin aire incorporado":{
				2:{//Slump 2
					"3/8": 207,
					"1/2": 199,
					"3/4": 190,
					"1": 179,
					"1.5": 166,
					"2": 154,
					"3": 130,
					"4": 113
				},
				4:{//Slump 4
					"3/8": 228,
					"1/2": 216,
					"3/4": 205,
					"1": 193,
					"1.5": 181,
					"2": 169,
					"3": 145,
					"4": 124
				}
			}
		}
		$scope.volumenUnitarioDeAgua=tablaVolumenAgua[$scope.conOSinAire][$scope.slump][$scope.tamanoMAxAgregadoGrueso];
		console.log($scope.volumenUnitarioDeAgua);
	}

	function setContenidoAire(){
		console.log("cont aire " +$scope.gradoDeExposicion+" "+ $scope.tamanoMAxAgregadoGrueso);
		const tablaContenidoAire={
			"Sin grado de exposicion":{
				"3/8": 3,
				"1/2": 2.5,
				"3/4": 2,
				"1": 1.5,
				"1.5": 1,
				"2": 0.5,
				"3": 0.3,
				"4": 0.2
			},
			"normal":{
				"3/8": 4.5,
				"1/2": 4,
				"3/4": 3.5,
				"1": 3,
				"1.5": 2.5,
				"2": 2,
				"3": 1.5,
				"4": 1
			},
			"moderado":{
				"3/8": 8,
				"1/2": 5.5,
				"3/4": 5,
				"1": 4.5,
				"1.5": 4.5,
				"2": 4,
				"3": 3.5,
				"4": 3
			},
			"extremo":{
				"3/8": 7.5,
				"1/2": 7,
				"3/4": 6,
				"1": 6,
				"1.5": 5.5,
				"2": 5,
				"3": 4.5,
				"4": 4
			}
		}
		$scope.aireAtrapado_Incorporado=tablaContenidoAire[$scope.gradoDeExposicion][$scope.tamanoMAxAgregadoGrueso];

	}

	function setRelacion(){
		let limSupResistenciaP=sacarLimSup($scope.resistenciaPromedio);
		let limInfResistenciaP=sacarLimInf($scope.resistenciaPromedio);
		console.log("set rela "+$scope.resistenciaPromedio+" "+ limSupResistenciaP+" "+limInfResistenciaP);

		const tablaRelacion = {
			"Con aire incorporado":{
				350:0.39,
				300:0.45,
				250:0.53,
				200:0.61,
				150:0.71

			},
			"Sin aire incorporado":{
				450:0.38,
				400:0.42,
				350:0.47,
				300:0.54,
				250:0.62,
				200:0.7,
				150:0.8
			}
		}

		if ($scope.resistenciaPromedio==150 || $scope.resistenciaPromedio==200 ||$scope.resistenciaPromedio==250 ||$scope.resistenciaPromedio==300 ||$scope.resistenciaPromedio==350 ||$scope.resistenciaPromedio==400 ||$scope.resistenciaPromedio==450  ){
			$scope.relacionAguaCemento=tablaRelacion[$scope.conOSinAire][$scope.resistenciaPromedio]
		}else{
			$scope.relacionAguaCemento=tablaRelacion[$scope.conOSinAire][limInfResistenciaP]+((($scope.resistenciaPromedio-limInfResistenciaP)/(limSupResistenciaP-limInfResistenciaP))*(tablaRelacion[$scope.conOSinAire][limSupResistenciaP] -tablaRelacion[$scope.conOSinAire][limInfResistenciaP]));
		}
		console.log($scope.relacionAguaCemento);
	}

	function sacarLimSup(i){
		let a=(Math.floor(i/50)+1)*50;
		return a;
	}
	function sacarLimInf(i){
		let a=(Math.floor(i/50))*50;
		return a;
	}

	function setFactorCemento(){
		$scope.factorCemento=redondear($scope.volumenUnitarioDeAgua/$scope.relacionAguaCemento);
		
	}

	function setContenidoAgregadoGrueso(){
		console.log("contAgregado g")
		const tablaContenidoAgregadoGrueso={
			"3/8": {
				"2.4": 0.5,
				"2.6":0.48,
				"2.8":0.46,
				"3":0.44
			},
			"1/2": {
				"2.4": 0.59,
				"2.6":0.57,
				"2.8":0.55,
				"3":0.53
			},
			"3/4": {
				"2.4": 0.66,
				"2.6":0.64,
				"2.8":0.62,
				"3":0.6
			},
			"1": {
				"2.4": 0.71,
				"2.6":0.69,
				"2.8":0.67,
				"3":0.65
			},
			"1.5": {
				"2.4": 0.76,
				"2.6":0.74,
				"2.8":0.72,
				"3":0.7
			},
			"2": {
				"2.4": 0.78,
				"2.6":0.76,
				"2.8":0.74,
				"3":0.72
			},
			"3": {
				"2.4": 0.81,
				"2.6":0.79,
				"2.8":0.77,
				"3":0.75
			},
			"4": {
				"2.4": 0.87,
				"2.6":0.85,
				"2.8":0.83,
				"3":0.81
			}
		}

		$scope.ContenidoAgregadoGrueso= tablaContenidoAgregadoGrueso[$scope.tamanoMAxAgregadoGrueso][$scope.moduloFinezaAgregadoFino]*$scope.pesoSecoAgregadoGrueso;
		console.log("tam g: "+$scope.tamanoMAxAgregadoGrueso+" mod ff: "+$scope.moduloFinezaAgregadoFino+" tabla: "+tablaContenidoAgregadoGrueso[$scope.tamanoMAxAgregadoGrueso][$scope.moduloFinezaAgregadoFino]+" resul: "+$scope.ContenidoAgregadoGrueso);
	}

	function setVolumenesAbsolutos(){
		$scope.sumaVolumenesConocidosM=redondear(($scope.factorCemento/($scope.pesoEspecificoCemento*1000))+($scope.volumenUnitarioDeAgua/1000)+($scope.aireAtrapado_Incorporado/100)+($scope.ContenidoAgregadoGrueso/($scope.pesoEspecificoAgregadoGrueso*1000)));
		$scope.sumaVolumenesConocidosKg=redondear(($scope.sumaVolumenesConocidosM*1000));
		console.log("volumenes conoc: m:"+$scope.sumaVolumenesConocidosM+" kg: "+$scope.sumaVolumenesConocidosKg);
	}

	function setContenidoAgregadoFino(){
		$scope.volumenAbsolutoAgregadoFino=redondear(1-$scope.sumaVolumenesConocidosM);
		$scope.pesoAgregadoFinoSeco=redondear($scope.volumenAbsolutoAgregadoFino*$scope.pesoEspecificoAgregadoFino*1000);
		console.log("cont agregado f: "+$scope.volumenAbsolutoAgregadoFino+" "+$scope.pesoAgregadoFinoSeco)
	}

	function setCorreccionPorHumedad(){
		$scope.agregadoGruesoHumedo=redondear($scope.ContenidoAgregadoGrueso*1.02);
		$scope.agregadoFinoHumedo=redondear($scope.pesoAgregadoFinoSeco*1.06);

		let agregadoFinoP=(6-$scope.absorcionAgregadoFino)/100;
		let agregadoGruesoP=(2-$scope.absorcionAgregadoGrueso)/100;

		let aporteHumedadAgregados =($scope.pesoAgregadoFinoSeco* agregadoFinoP)+($scope.ContenidoAgregadoGrueso*agregadoGruesoP);
		$scope.aguaEfectiva=redondear($scope.volumenUnitarioDeAgua - aporteHumedadAgregados);

	}

	function setProporcionPeso(){
		$scope.relacionAguaCementoDeDiseno=redondear($scope.volumenUnitarioDeAgua /$scope.factorCemento);
		$scope.relacionAguaCementoEfectiva=redondear($scope.aguaEfectiva /$scope.factorCemento);
	}
	function redondear(i){
		return ((Math.round(i*100))/100);
	}



}



})();