(function () {
    'use strict';

    angular
            .module('Gedosoft')
            .controller('GestionUsuariosController', GestionUsuariosController);

    GestionUsuariosController.$inject = ['$log', '$scope', '$state', '$sessionStorage', '$timeout', 'usuService', 'empresaService', 'roleService', 'actualizarService'];

    function GestionUsuariosController($log, $scope, $state, $sessionStorage, $timeout, usuService, empresaService, roleService, actualizarService) {

 /*
  * validacion para que solo el usuario con el Rol = 1 pueda ingresar a este controlador 
  */
 
        if (typeof $sessionStorage.data_user[0] !== 'undefined' && $sessionStorage.data_user[0].rol_id === 1) {


            $scope.registroUsuError = {};
            $scope.updateError = {};
            $scope.message = '';
            $scope.userError = false;
            $scope.Usu = {};

/*
 * servicio para traer los datos de la empresa, uduario y roles
 * ___________________________________________________________________
 */
            empresaService.getEmpresaAct()
                    .then(res => {
                        $scope.empresas = res.data;
                        usuService.getUser()
                                .then(response => {
                                    $scope.users = response.data;
                                    roleService.getRol()
                                            .then(resp => {
                                            });
                                }).catch(err => $log.error(err));
                    }).catch(err => $log.error(err));



/*
 * servicio para traer los roles 
 * _________________________________________________________________
 */
            roleService.getRol().then(res => {
                $scope.Roles = res.data;
            }).catch(err => $log.error(err));



/*
 * funcion para hacer los registro de un usuario 
 */

            $scope.regitroUsu = () => {
              /*
               * condicion de que las contraseñas sean iguales
               */
                if ($scope.Usu.contrasena === $scope.Usu.contrasena1) {
                  
                  /*
                   * servicio para agregar un usuario
                   * ___________________________________________________
                   */
                    usuService.addUser($scope.Usu).then((resp) => {
                        $('#show2').modal('toggle');
                        $scope.users = resp.data;
                        delete $scope.Usu;
                        toastr.options = {
                            "newestOnTop": true,
                            "positionClass": "toast-top-right",
                            "preventDuplicates": true,
                            "onclick": null,
                            "timeOut": "2000"
                        };
                        Command: toastr["success"]("Usuario creado ", "Usuario");
                    }).catch((err) => {
                        $log.error(err);
                        $scope.registroUsuError = err.data.error;
                        delete $scope.Usu;
                    });
                } else {
                    $scope.message = 'las contraseñas no coinciden';
                    $scope.userError = !$scope.userError;
                    $timeout(() => {
                        $scope.userError = !$scope.userError;
                    }, 3000);
                }

            };

/*
 * funcion para borrar un usuario 
 */
            $scope.DeleteUsser = (id) => {
              /*
               * servicio para borrar un usuario 
               */
                usuService.deleteUser({id})
                        .then(respuesta => {
                            $scope.users = respuesta.data;
                        })
                        .catch(err => $log.error(err));
            };


            $scope.borrar = error => {
                eval('delete $scope.registroUsuError.' + error);
            };

            $scope.borrarU = error => {
                eval('delete $scope.updateError.' + error);
            };


            $scope.userMod = {};

/*
 * funcion para traer los datos de ususrio para poder actualizarlo
 */
            $scope.modificar = (data) => {
                $scope.userMod = data;
                delete $scope.userMod.contrasena;
            };
            /*
             * funcion para actualizar un usuario
             */

            $scope.update = () => {
              
              /*
               * servicio para actualizar un usuario
               * __________________________________________________________
               */
                usuService.updateUser($scope.userMod).then((respu) => {
                    $('#show3').modal('toggle');
                    $scope.users = respu.data;
                }).catch((err) => {
                    $log.error(err);
                    $scope.updateError = err.data.error;
                });
            };
            /*
             * funcion para desactivar un usuario 
             */

            $scope.desactivar = () => {
              
              /*
               * servio pàra desactivar un usuario 
               */
              
                actualizarService.desactivarUser($scope.userMod).then((ressp) => {
                    $('.desactivar').modal('toggle');
                    $scope.users = ressp.data;
                }).catch(err => $log.error(err));
            };

/*
 * funcion para activar un usuario
 */

            $scope.activar = () => {
              
              /*
               * servicio para activar un usuario
               */
                actualizarService.activarUser($scope.userMod).then((ressssp) => {
                    $('.activar').modal('toggle');
                    $scope.users = ressssp.data;
                }).catch(err => $log.error(err));
            };
        } else {
            $sessionStorage.$reset();
            window.location.replace("http://localhost:8080/gestiondocumental/public/");
        }
    }
})();