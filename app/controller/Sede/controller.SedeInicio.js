(function () {
    'use strict';

    angular
        .module('Ausentismo')
        .controller('sedeinicioController', sedeinicioController)

    sedeinicioController.$inject = ['$scope', '$state', '$log', 'paginaService', '$http'];

    function sedeinicioController($scope, $state, $log, paginaService, $http) {


        toastr.options = {
            "newestOnTop": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "timeOut": "2000"
        };

        $scope.numero = {};
        $scope.numero.id = 1;
        $scope.numero.numbre = 'luis';
        $scope.numero.sede = '1';

        $scope.entrada = () => {

            if ($scope.numero.cedula === null || $scope.numero.cedula === undefined) {
                Command: toastr["error"]("Digite cedula", "Error");
            }
            else {
                $scope.numero.id_emp = $scope.numero.cedula;
                paginaService.postCc($scope.numero).then(function successCallback(response) {
                    $log.log(response);

                }, function errorCallback(response) {
                    console.log("POST-ing of data failed");
                });
                delete $scope.numero.cedula;
            }



        };


        $scope.borrarcampo = () => {

        };

        $scope.sede = {};
        $scope.sede.nom_sede = 'edificio central';


        /*         $scope.entrada = () => {
                    $http.post("recibe.php", $scope.numero).then(function successCallback(response) {
                        console.log(response);
                        console.log("Successfully POST-ed data");
                        delete $scope.numero.cedula;
                    }, function errorCallback(response) {
                        console.log("POST-ing of data failed");
                    });
                }; */



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