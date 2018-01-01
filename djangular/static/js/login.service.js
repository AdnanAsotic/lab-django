(function() {
    'use strict';

    angular.module('scrumboard')
        .service('Login', ['$http', '$location', Login]);

    function Login($http, $location) {
        this.login = login;
        this.logout = logout;
        this.isLoggedIn = isLoggedIn;
        this.redirectIfNotLoggedIn = redirectIfNotLoggedIn;

        function login(credentials) {
            return $http.post('/auth_api/login/', credentials)
                .then(function(response) {
                    localStorage.currentUser = JSON.stringify(response.data);
                    $location.url('/');
                });
        }

        function isLoggedIn() {
            return !!localStorage.currentUser;
        }

        function logout() {
            delete localStorage.currentUser;
            $http.get('/auth_api/logout/').then(function() {
                $location.url('/login');
            });
        }

        function redirectIfNotLoggedIn() {
            if (!isLoggedIn()) {
                $location.url('/login');
            }
        }
    }
})();