(function () {
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .controller('inicioController', inicioController)

    inicioController.$inject = ['$scope', '$state', '$log', '$http'];

    function inicioController($scope, $state, $log, $http) {

        $scope.Pagina2 = () => {
            $state.go('pagina2');

        };

        $scope.hola = [];
        $scope.hola.id = '22';
        $scope.hola.nombre = 'SoluciÃ³n Ãºtil y apaÃ±ada';
        $log.log($scope.hola);



        $scope.getRequest = () => {
            console.log("I've been pressed!");
            $http.get("http://restcountries.eu/rest/v1/region/africa").then(function successCallback(response) {
                    $scope.response = response.data;
                    $log.log(response);
                }, function errorCallback(response) {
                    console.log("Unable to perform get request");
                });
        };


        $scope.Usu = {};    
        $scope.Usu.id = 12;
        //    Our POST request function
        console.log($scope.Usu);

        $scope.pruebaPost = () => {
            $http.post("recibe.php", $scope.Usu).then(function successCallback(response) {
                console.log(response);
                    console.log("Successfully POST-ed data");
                }, function errorCallback(response) {
                    console.log("POST-ing of data failed");
                });
        };

    }
})();