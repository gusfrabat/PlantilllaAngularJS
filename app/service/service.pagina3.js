(function () {
    'use strict';

    angular.module('PlantillaAngularJs').service('pagina3Service', pagina3Service,);
    pagina3Service.$inject = ['$http', 'urlBase', '$httpParamSerializerJQLike'];

    function pagina3Service($http, urlBase, $httpParamSerializerJQLike) {

        this.getUser = () => {
            return $http.get("https://jsonplaceholder.typicode.com/users");
        };





    }
})();