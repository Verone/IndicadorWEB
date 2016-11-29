var cadSQLModule = angular.module('cadSQLModule',[]);

cadSQLModule.controller("cadSQLControl", function ($scope) {


	$scope.sqls = [
		{codigo: 1, descricao: 'Agora vai', status: 'SIM'},
		{codigo: 2, descricao: 'Agora vai', status: 'NAO'},
		{codigo: 3, descricao: 'Agora vai', status: 'SIM'},
		{codigo: 4, descricao: 'Agora vai', status: 'NAO'},
		{codigo: 5, descricao: 'Agora vai', status: 'SIM'},
	]
	

	$scope.selecionaSQL = function(cadSQL){
		$scope.cadSQL = cadSQL;
	}

	$scope.salvar = function () {
		$scope.cadSQL.push($scope.cadSQL);
		$scope.novo();
	}

	$scope.excluir = function () {
		$scope.cadSQL.splice($scope.cadSQL.indexOf($scope.cadSQL),1);
		$scope.novo();
	}

	$scope.novo = function () {
		$scope.cadSQL = "";
	}

});