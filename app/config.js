angular.module('Ausentismo').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.delete = {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'};
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('index', {
      url: '/',
      template: '',
      controller: 'Login2Controller',
      resolve: {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                files: [
                  'app/controller/controller.Login2.js'
                ]
              }
            ]);
          }]
      }
    });/* .state('SedeInicio', {
      url: '/Sede',
      templateUrl: 'app/template/Sede/SedeInicio.html',
      controller: 'sedeinicioController',
      resolve: {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
          return $ocLazyLoad.load([{
            files: [
              'css/Sede/SedeInicio.css',
              'app/service/Sede/service.Sedeinicio.js',
              'app/controller/Sede/controller.SedeInicio.js'
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
              'app/service/service.pagina3.js',
              'app/controller/controller.pagina3.js',
              'css/pagina3.css'
            ]
          }]);
        }]
      }
    }); */
  }
]);