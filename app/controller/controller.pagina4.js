(function () {
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .controller('pagina4Controller', pagina4Controller)

    pagina4Controller.$inject = ['$scope', '$state', '$log'];

    function pagina4Controller($scope, $state, $log) {

        $scope.login = () => {
            $state.go('pagina2');
        }

    }
})();