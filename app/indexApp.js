var app = angular.module('indexApp', []);

app.controller('indexController', function($scope) {
    
    var grids = [{
            titulo: "RESULT SQL 01",
            icone: "glyphicon glyphicon-home",
            result: "01"
    },
    {
        titulo: "RESULT SQL 01",
        icone: "&#xE023",
        result: "01"
    },
    {
        titulo: "RESULT SQL 01",
        icone: "&#xE023",
        result: "01"
    },
    {
        titulo: "RESULT SQL 01",
        icone: "&#xE023",
        result: "01"
    },
    {
        titulo: "RESULT SQL 01",
        icone: "&#xE023",
        result: "01"
    }];

    $scope.grid = {};
    $scope.grids = grids;
});