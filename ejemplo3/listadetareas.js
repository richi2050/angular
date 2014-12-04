function ControladorTareas($scope){

	$scope.tareas=[
	{texto:'primer texto', hecho:true},
	{texto:'super texto',hecho:false}];

	$scope.agregarTarea = function(){
		$scope.tareas.push({texto:$scope.textoNuevaTarea,hecho:false});
		$scope.textoNuevaTarea ="";
	};

	$scope.restantes = function(){
		var cuenta = 0;
		angular.forEach($scope.tareas, function(tarea) { 
			cuenta += tarea.hecho ? 0 : 1;	
		});
		return cuenta;
	};

	$scope.eliminar= function () {
		var tareaViejas = $scope.tareas;
		$scope.tareas = [];
		angular.forEach(tareaViejas,function(tarea) {
			if(!tarea.hecho){
				$scope.tareas.push(tarea);
			}
		});
	}
}