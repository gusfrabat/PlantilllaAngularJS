(function () {
    'use strict';

    angular.module('Ausentismo').service('paginaService', paginaService)
    paginaService.$inject = ['$http'];

    function paginaService($http) {


        this.postCc = (data) => {
           return $http.post("recibe.php", (data));
        };



    }
})();