(function () {
    'use strict';

    angular.module('PlantillaAngularJs').service('paginaService', paginaService)
    paginaService.$inject = ['$http'];

    function paginaService($http) {


        this.postCc = (data) => {
            return $http.post("recibe-formulario.php", (data));
        };



    }
})();