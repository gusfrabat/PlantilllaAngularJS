angular.module('Ausentismo').component('LoginComponent', {
    bindings: {},
    controller: 'LoginComponentController',
    templateUrl: 'app/template/Login.html'
}).controller('LoginComponentController', LoginController);
LoginController.$inject = ['$scope', '$state'];

function LoginController($scope, $state) {

    $scope.login = () => {
        $scope.$parent.show = true;
    }

}