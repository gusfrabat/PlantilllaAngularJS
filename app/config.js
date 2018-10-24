angular.module('PlantillaAngularJs')
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      $httpProvider.defaults.headers.delete = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      };
      $locationProvider.hashPrefix('');
      $urlRouterProvider.otherwise('/');
      $stateProvider.state('inicio', {
        url: '/',
        templateUrl: 'app/template/inicio.html',
        controller: 'inicioController',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
              files: [
                'app/controller/controller.inicio.js'
              ]
            }]);
          }]
        }
      }).state('pagina2', {
        url: '/pagina',
        templateUrl: 'app/template/pagina.html',
        controller: 'paginaController',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
              files: [
                'app/controller/controller.pagina.js'
              ]
            }]);
          }]
        }
      }).state('pagina3', {
        url: '/pagina3',
        templateUrl: 'app/template/pagina3.html',
        controller: 'pagina3Controller',
        resolve: {
          desp: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
              files: [
              'app/controller/controller.pagina3.js'
            ]
            }]);
          }]
        }
      }).state('pagina4',{
        url: '/pagina4',
        templateUrl: 'app/template/pagina4.html',
        controller: 'pagina4Controller',
        resolve: {
          desp: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load ([{
              files: [
                'app/controller/controller.pagina4.js'
              ]
            }]);
          }]
        }
      });
    }
  ]);