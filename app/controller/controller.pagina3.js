(function () {
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .controller('pagina3Controller', pagina3Controller)

    pagina3Controller.$inject = ['$scope', '$http', 'pagina3Service', '$log', '$sessionStorage'];

    function pagina3Controller($scope, $http, pagina3Service, $log, $sessionStorage) {

        // ------------------------------------------------------ normal
        /*       $scope.total = 0;
               $scope.cuanto = 0;

               $scope.sumar = function () {
                   console.log('suma');
                   $scope.total += parseInt($scope.cuanto);
                   delete $scope.cuanto;
               }

               $scope.restar = function () {
                   console.log('resta');
                   $scope.total -= parseInt($scope.cuanto);
                   delete $scope.cuanto;

               }*/

        //ng-class
        /* $scope.total = 0;
         //scope.cuanto = 0;


         $scope.tamTitular = "titularpeq"
         $scope.sumar = function () {
             $scope.total += parseInt($scope.cuanto);
         }
         $scope.restar = function () {
             $scope.total -= parseInt($scope.cuanto);
         }
         $scope.clases = ["uno", "dos", "tres"]; */

        //podríamos inicializar valores del modelo
        //vm.activo = false;
        /* $scope.avisar = function () {
             console.log("cambié");
         }*/



        pagina3Service.getUser().then(res => {
            $scope.s = res.data;
        }).catch(err => $log.error(err));

        $scope.userMod = {};

        $scope.modificar = (data) => {
            $scope.userMod = data;
            $sessionStorage.dataUser = $scope.userMod.id;
            $log.log($scope.userMod.name);
        };



        $scope.buscaEnRegion = function () {
            $http.get($scope.url).then(function (respuesta) {
                console.log("res:", respuesta);
                $scope.paises = respuesta.data;
            });
        }






        var conAjax = $http.post("recibe.php", {
            uno: 1,
            fruta: "manzana"
        });
        conAjax.then(function (respuesta) {
            console.log(respuesta);
        });



    }
})();