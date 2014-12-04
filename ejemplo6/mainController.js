var miApp= angular.module('miApp',[]);

miApp.factory('Fabrica',function(){ 
		var servicio = {
			objeto: {
				mensaje:'Saludos desde el controlador la fabrica'
			},
			msjInicial:function(){
				servicio.objeto['mensaje'] ="saludos desde la dddfdaddvbrica";
			},
			msjNuevo: function(msj){
				servicio.objeto.mensaje= msj;
			}
		};
return servicio;
});

function unoController($scope, Fabrica){
	$scope.nuevo = function(){
		Fabrica.msjNuevo($scope.nuevoMensaje);
	};
	$scope.dato = Fabrica.objeto;
};


function dosController($scope, Fabrica){
	$scope.nuevo = function(){
		Fabrica.msjNuevo($scope.nuevoMensaje);
	};
	$scope.dato = Fabrica.objeto;
};


function tresController($scope,Fabrica){
	$scope.resetear = function(){
		Fabrica.msjInicial();
	};
	
};