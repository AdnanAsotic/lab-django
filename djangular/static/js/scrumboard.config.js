(function() {
    'use strict';

    angular.module('scrumboard')
        .config(['$routeProvider', configApp])
        .run(['$http', run]);

    function configApp($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/static/html/scrumboard.html',
                controller : 'ScrumboardController'
            })
            .when('/login', {
                templateUrl : '/static/html/login.html',
                controller : 'LoginController'
            })
            .otherwise('/');
    }

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

})();