(function() {
    'use strict';

    angular
        .module('PlantillaAngularJs')
        .factory('Service', Service);

    Service.$inject = ['dependency1'];
    
    function Service(dependency1) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

    }
})();