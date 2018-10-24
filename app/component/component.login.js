angular.module('Gedosoft').component('loginComponent', {
    bindings: {},
    controller: 'inicioComponentController',
    templateUrl: 'app/template/inicio.html'
}).controller('inicioComponentController', inicioController);
inicioController.$inject = ['$scope', 'securityService', '$state', '$sessionStorage'];

function inicioController($scope, security, $state, $sessionStorage) {

    if ($sessionStorage.data_user === undefined) {
        $scope.user = {};
        $scope.userError = false;
        $scope.ocultar = false;

        $scope.algo = () => {
            $scope.ocultar = true;
        };

        $scope.hide = () => {
            $scope.ocultar = false;
            $scope.userError = false;
            $scope.user = {};
        };

        $scope.login = () => {
            security.login($scope.user).then((response) => {
                var rol = response.data.data_user[0].rol_id;
                $sessionStorage.data_user = response.data.data_user;
                switch (rol) {
                    case '1':
                        $state.go('dashboard');
                        break;
                    case '2':
                        $state.go('dashboardAuxAdm');
                        break;
                    default:
                        $state.go('login');
                }
                $scope.$parent.show = true;
                window.location.replace("http://localhost:8080/GestionDocumental/public/#/dashboard");
            }, () => {

                delete $scope.user;
                toastr.options = {
                    "positionClass": "toast-top-right",
                    "preventDuplicates": true,
                    "onclick": null,
                    "showDuration": "1000",
                    "hideDuration": "1000",
                    "timeOut": "2000",
                    "extendedTimeOut": "1000"
                };
                Command: toastr["error"]("Datos de usuario invalidos", "LogIn");

            });
        };
    } else {
        $scope.$parent.show = true;
    window.location.replace("http://localhost:8080/gestiondocumental/public/#/dashboard");
    }
}
