var cadIndicadorModule = angular.module('cadIndicadorModule',[]);

cadIndicadorModule.controller("cadIndicadorController", function ($scope, $http) {
	
	urlIndicador = 'http://localhost:8080/Indicador/rs/painelIndicador';
	urlQuery = 'http://localhost:8080/Indicador/rs/query';
	
	$scope.pesquisarPainel = function() {
		$http.get(urlIndicador).success(function(indicadores) {
			$scope.indicadores = indicadores;
		}).error(function(erro) {
			alert(erro);
		});
	}

	$scope.salvar = function() {
		if($scope.cadIndicador.codigo == null) {
			alert('if');
			$http.post(urlIndicador, $scope.cadIndicador).success(function() {
				$scope.pesquisarPainel();
				$scope.novo();				
			}).error(function(erro) {
				alert(erro);
			});
		} else {
			alert('else');
			$http.put(urlIndicador, $scope.cadIndicador).success(function() {
				$scope.novo();				
			}).error(function(erro) {
				alert(erro);
			});
		}
		
	}

	$scope.excluir = function() {
		if($scope.cadIndicador.codigo == null || $scope.cadIndicador.codigo == '') {
			alert('Selecione um produto');
		} else {
			urlExcluir = urlIndicador + '/' + $scope.cadIndicador.codigo;
			alert(urlExcluir);
			$http.delete(urlExcluir).success(function() {
				$scope.novo();
				$scope.pesquisarPainel();
			}).error(function(erro) {
				alert(erro);
			});
		}
	}

	$scope.novo = function() {
		$scope.cadIndicador = '';
	}
	
	$scope.selecionaIndicador = function(cadIndicador){
		$scope.cadIndicador = cadIndicador;
	}
	
	$scope.selecionaQuery = function(cadQuery){
		$scope.cadQuery = cadQuery;
	}
	
	$scope.pesquisarPainel();

});