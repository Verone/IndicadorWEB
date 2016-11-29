var app = angular.module('indicadorApp', []);

app.controller('IndicadorController', function($scope) {
    var indicadores = [{
            id: 1,
            descricao: 'TMA',
            sql: 'SELECT * FROM dual;'
        }, {
            id: 2,
            descricao: 'TMT',
            sql: 'SELECT * FROM dual;'
        }];

    $scope.indicador = {};
    $scope.indicadores = indicadores;

    $scope.salvar = function(indicador) {
        var indicadorEncontrador = false;
        for (var i = 0, tamanho = indicadores.length; i < tamanho; i++) {
            if(indicadores[i].id === indicador.id) {
                indicadores[i].descricao = indicador.descricao;
                indicadores[i].sql = indicador.sql;
                indicadorEncontrador = true;
                break;
            }
        }
        if (!indicadorEncontrador) {
            indicadores.push(indicador);
        }
        $scope.indicador = {};
    };

    $scope.excluir = function(indicador) {
        for (var i = 0, tamanho = indicadores.length; i < tamanho; i++) {
            if (indicadores[i].id === indicador.id) {
                indicadores.splice(i, 1);
            }
        }
    };

    $scope.editar = function(indicador) {
        $scope.indicador = angular.copy(indicador);
    };

    $scope.cancelar = function() {
        $scope.indicador = {};
    };
});