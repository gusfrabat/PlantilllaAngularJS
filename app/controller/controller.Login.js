(function () {
  'use strict';

  angular.module('Ausentismo').controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$state'];

  function LoginController($scope, $state) {
    //    $scope.show = ($sessionStorage.data_user !== undefined) ? true : false;
    //    if ($sessionStorage.data_user !== undefined) {
    //      $state.go('menu');
    //    }
  }
})();