var cadQueryModule = angular.module('cadQueryModule',[]);

cadQueryModule.controller("cadQueryController", function ($scope, $http) {

	urlIndicador = 'http://localhost:8080/Indicador/rs/painelIndicador';

	urlQuery = 'http://localhost:8080/Indicador/rs/query';
	
	$scope.pesquisarPainel = function() {
		$http.get(urlIndicador).success(function(indicadores) {
			$scope.indicadores = indicadores;
		}).error(function(erro) {
			alert(erro);
		});
	}
	
	$scope.pesquisarQuery = function() {
		$http.get(urlQuery).success(function(sqls) {
			$scope.sqls = sqls;
		}).error(function(erro) {
			alert(erro);
		});
	}
	
	$scope.salvar = function() {
		if ($scope.cadQuery.codigo == '') {
			$http.post(urlQuery,$scope.cadQuery).success(function(cadQuery) {
				$scope.sqls.push($scope.cadQuery);
				$scope.novo();
			}).error(function (erro) {
				alert(erro);
			});
		} else {
			$http.put(urlQuery,$scope.cadQuery).success(function(cadQuery) {
				$scope.pesquisarQuery();
				$scope.novo();
			}).error(function (erro) {
				alert(erro);
			});
		}
	}
	
	$scope.excluir = function() {
		if ($scope.cadQuery.codigo == '') {
			alert('Selecione um produto');
		} else {
			urlExcluir = urlQuery + '/' + $scope.cadQuery.codigo;
			$http.delete(urlExcluir).success(function () {
				$scope.pesquisarQuery();
				$scope.novo();
			}).error(function (erro) {
				alert(erro);
			});
		}
	}

	$scope.selecionaQuery = function(cadQuery){
		$scope.cadQuery = cadQuery;
	}


	$scope.novo = function() {
		$scope.cadQuery = "";
	}
	
	$scope.pesquisarPainel();
	$scope.pesquisarQuery();
});
