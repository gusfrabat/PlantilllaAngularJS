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

        $scope.an = {};

        pagina3Service.getUser().then(res => {
            $scope.s = res.data;
            $scope.an = res.data;
            //$log.log($scope.an);
        }).catch(err => $log.error(err));

        $scope.userMod = {};

        $scope.modificar = (data) => {
            $scope.userMod = data;
            $sessionStorage.dataUser = $scope.userMod.id;
          //  $log.log($scope.userMod.name);
        };



        $scope.buscaEnRegion = function () {
            $http.get($scope.url).then(function (respuesta) {
            //    console.log("res:", respuesta);
                $scope.paises = respuesta.data;
            });
        }




        $scope.manzana = {};
        pagina3Service.AddUser().then(ress => {
            $scope.manzana = ress.data;
           // $log.log($scope.manzana);
        }).catch(err => $log.error(err));


        var conAjax = $http.post("recibe.php", {
            uno: 1,
            fruta: "manzana"
        });
        conAjax.then(function (respuesta) {
            $scope.zs = respuesta.data;
           // console.log(respuesta);
        });



        //inicializo un objeto en los datos de formulario
        $scope.fdatos = {};

        // declaro la función enviar
        $scope.enviar = function () {
            $http.post("recibe-formulario.php", $scope.fdatos)
                .then(function (resp) {
             //       console.log(resp);
                    //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                });
        }


        $scope.enviar = () => {
            pagina3Service.AddData($scope.fdatos).then(respu => {
            //    $log.log(respu);
            }).catch(err => $log.error(err));
        }

   





        pagina3Service.traerdatos().then(rres => {
            $scope.datosJson = rres.data;
            $log.log($scope.datos.Json);
            console.log(rres);
        }).catch(err => $log.error(err));

    }
})();