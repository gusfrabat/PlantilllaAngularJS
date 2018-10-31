(function () {
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .controller('paginaController', paginaController)

    paginaController.$inject = ['$scope', '$state', '$log', 'paginaService', '$http'];

    function paginaController($scope, $state, $log, paginaService, $http) {

        $scope.numero = {};

        $scope.entrada = () => {
            paginaService.postCc($scope.numero).then(res => {
                $log.log(res);
                delete $scope.numero.cedula;
            }).catch(err => $log.error(err));
        }  

        $scope.entrada = () => {
            $http.post("recibe.php", $scope.numero).then(function successCallback(response) {
                console.log(response);
                    console.log("Successfully POST-ed data");
                    delete $scope.numero.cedula;
                }, function errorCallback(response) {
                    console.log("POST-ing of data failed");
                });
        };



        $scope.pagina1 = () => {
            $state.go('inicio');
        }

        $scope.pagina3 = () => {
            $state.go('pagina3');
        }

        $scope.pagina4 = () => {
            $state.go('pagina4');
        }
    }
})();