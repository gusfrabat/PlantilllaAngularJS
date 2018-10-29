(function () {
    'use strict';

    angular.module('PlantillaAngularJs').service('pagina3Service', pagina3Service,);
    pagina3Service.$inject = ['$http', '$httpParamSerializerJQLike'];

    function pagina3Service($http, $httpParamSerializerJQLike) {

        this.getUser = () => {
            return $http.get("https://jsonplaceholder.typicode.com/users");
        };

        this.AddUser = () => {
            return $http.post("recibe.php", {
                uno: 1,
                fruta: "manzana"
            });
        };

        this.AddData = (data) => {
            return $http.post("recibe-formulario.php", (data))
        };
   


    }
})();