(function() {
    'use strict';

    angular.module('scrumboard')
        .controller('LoginController', ['$scope', '$http', '$location', 'Login', LoginController]);

    
    function LoginController($scope, $http, $location, Login) {
        $scope.login = function() {
            Login.login({ username : 'adnan', password: 'policija' });
        }
    }

})();