var miApp= angular.module('miApp',[]);

miApp.factory('Dato',function(){ 
return {mensaje:'Saludos desde el controlador la fabrica'};
});

function unoController($scope, Dato){
	$scope.dato=Dato;
}


function dosController($scope, Dato){
	$scope.dato=Dato;
}