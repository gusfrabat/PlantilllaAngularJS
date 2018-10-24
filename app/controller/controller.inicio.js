(function () {
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .controller('inicioController', inicioController)

    inicioController.$inject = ['$scope', '$state', '$log'];

    function inicioController($scope, $state, $log) {

        $scope.Pagina2 = () => {
            $state.go('pagina2');

        };

    }
})();