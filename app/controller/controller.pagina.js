(function(){
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .controller('paginaController', paginaController)

        paginaController.$inject = ['$scope', '$state', '$log'];

    function paginaController($scope, $state, $log) {

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