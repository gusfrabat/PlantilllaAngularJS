(function () {
  'use strict';

  angular.module('Gedosoft').service('usuService', usuService);
  usuService.$inject = ['$http', 'urlBase', '$httpParamSerializerJQLike'];

  function usuService($http, urlBase, $httpParamSerializerJQLike) {
    this.addUser = (data) => {
      return $http.post(urlBase + '/usuario/Agregar', $httpParamSerializerJQLike(data));
    };
    this.getUser = () => {
      return $http.get(urlBase + '/usuario/Agregar');
    };
    this.deleteUser = (data) => {
      return $http({
        method: 'DELETE',
        url: urlBase + '/usuario/Agregar',
        data: $httpParamSerializerJQLike(data)
      });
    };
    this.updateUser = (data) => {
      return $http({
        method: 'PUT',
        url: urlBase + '/usuario/Agregar',
        data: $httpParamSerializerJQLike(data)
      });
    };
  }
})();