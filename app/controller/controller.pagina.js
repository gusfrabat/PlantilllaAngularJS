(function () {
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .controller('paginaController', paginaController)

    paginaController.$inject = ['$scope', '$state', '$log'];

    function paginaController($scope, $state, $log) {


        $scope.products = [];
        $scope.addItem = function () {

           // console.log($scope.addMe.toString().length);

            if ($scope.addMe.toString().length === 0) {
                console.log(funciona);
            }

            $scope.products.push($scope.addMe);
            console.log($scope.products.indexOf($scope.addMe));

            delete $scope.addMe;
        }





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