function filtrosController($scope){
	$scope.empleados  = [
	 { nombre:'ampleado 1', paterno:'paterno 1', materno: 'lugo', primerDias: new Date(),
	 	salario:1000, telefono:'722711', bono: 1.235
	 },
	 { nombre:'bmpleado 2', paterno:'paterno 2', materno: 'recillas', primerDias: new Date(),
	 	salario:2000, telefono:'722711', bono: 1.235
	 },
	 { nombre:'cmpleado 3', paterno:'paterno 3', materno: 'quiroz', primerDias: new Date(),
	 	salario:3000, telefono:'722711', bono: 1.235
	 },
	 { nombre:'rmpleado 4', paterno:'paterno 4', materno: 'lopez', primerDias: new Date(),
	 	salario:4000, telefono:'722711', bono: 1.235
	 },
	 { nombre:'tmpleado 5', paterno:'paterno 5', materno: 'ruiz', primerDias: new Date(),
	 	salario:5000, telefono:'722711', bono: 1.235
	 },
	 { nombre:'dmpleado 6', paterno:'paterno 6', materno: 'barron', primerDias: new Date(),
	 	salario:6000, telefono:'722711', bono: 1.235
	 },

	];

	$scope.ordenarPor= function(orden){
		$scope.ordenSeleccionado = orden;
	};

}